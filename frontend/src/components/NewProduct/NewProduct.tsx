import { SetStateAction, useState } from "react";
import firebase from "firebase";
import {
  SelectFile,
  LabelFile,
  AddProductGrid,
  PreviewImage,
  NameProduct,
  PriceProduct,
  ImageProduct,
  ProductData,
  InputDataProduct,
  LabelTitle,
  ButtonSend,
} from "./styles";
import { useCommerceContext } from "../../contexts/ComerceContext";

const NewProduct = () => {
  const { uploadProduct } = useCommerceContext();
  const [imagePreview, setImagePreview] = useState<
    string | undefined | ArrayBuffer | null
  >();
  const [selectedImage, setSelectedImage] = useState<File>();
  const [urlImageProgress, setUrlImageProgress] = useState<number>();
  const [productName, setProductName] =
    useState<SetStateAction<string | undefined>>();
  const [productPrice, setProductPrice] =
    useState<SetStateAction<string | undefined>>();

  async function uploadProductImage(e: any) {
    e.preventDefault();

    if (!selectedImage) {
      return alert("Selecione uma imagem!");
    }

    const upload = firebase
      .storage()
      .ref("Images/ImagesOfProducts/" + selectedImage.name)
      .put(selectedImage);

    await upload.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUrlImageProgress(progress);
      },
      (error: any) => {
        throw new Error("Erro ao fazer upload da Imagem");
      },
      () => {
        upload.snapshot.ref.getDownloadURL().then((url) => {
          const data = { 
            name: productName,
            price: productPrice,
            urlImage: url
           }
          uploadProduct(data);
        });
      }
    );
  }

  function readImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length <= 0) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    setSelectedImage(e.target!.files[0]!);
    reader.readAsDataURL(e.target!.files[0]!);
  }

  return (
    <AddProductGrid>
      <PreviewImage>
        <NameProduct>{productName?.length! > 0 ? productName : "Nome do produto"}</NameProduct>
        <SelectFile
          style={{ display: "none" }}
          id="input-file-image"
          onChange={(e) => readImage(e)}
          type={"file"}
          accept="image/png,image/jpeg"
        />
        <ImageProduct src={imagePreview as string | undefined} alt="" />
        <PriceProduct>Preço - {productPrice?.length! > 0 ? productPrice : ""} $</PriceProduct>
      </PreviewImage>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProductData onSubmit={(e) => uploadProductImage(e)}>
          <div>
            <LabelTitle>Nome</LabelTitle>
            <InputDataProduct
              onChange={(e) => setProductName(e.target.value)}
              required
              type={"text"}
            />
          </div>
          <div>
            <LabelTitle>Preço</LabelTitle>
            <InputDataProduct
              onChange={(e) => setProductPrice(e.target.value)}
              required
              type={"number"}
              step="0.01"
              min="0"
              lang="en"
            />
          </div>

          <LabelFile htmlFor="input-file-image">Selecione uma imagem</LabelFile>
          <ButtonSend type="submit">ENVIAR</ButtonSend>
        </ProductData>
      </div>
    </AddProductGrid>
  );
};

export default NewProduct;
