import { SetStateAction, useEffect, useState } from "react";
import { queryClient } from "../../index";
import firebase from "firebase";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useAuthContext } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { uploadProduct } from "../../api/product";
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
  BackLink,
} from "./styles";

const NewProduct = () => {
  const { user } = useAuthContext();
  const { push } = useHistory();
  const [imagePreview, setImagePreview] = useState<
    string | undefined | ArrayBuffer | null
  >();
  const [selectedImage, setSelectedImage] = useState<File>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [urlImageProgress, setUrlImageProgress] = useState<number>();
  const [productName, setProductName] =
    useState<SetStateAction<string | undefined>>();
  const [productPrice, setProductPrice] =
    useState<SetStateAction<string | undefined>>();

  const {
    mutate: mutateUploadProduct,
  } = useMutation(uploadProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("allProducts");
      alert(`${productName} cadastrado com sucesso!`);
      document.location.reload();
    },
    onError: () => {
      alert(`${productName} não cadastrado!`)
    },
  });

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
            urlImage: url,
          };
          mutateUploadProduct(data);
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
  useEffect(() => {
    if (user?.id) {
      if (!user.admin) {
        push("/");
      }
    }
  }, [push, user?.admin, user?.id]);

  return (
    <AddProductGrid>
      <BackLink to="/">
        <IoMdArrowRoundBack size="2.5rem" />
      </BackLink>
      <PreviewImage>
        <NameProduct>
          {productName?.length! > 0 ? productName : "Nome do produto"}
        </NameProduct>
        <SelectFile
          style={{ display: "none" }}
          id="input-file-image"
          onChange={(e) => readImage(e)}
          type={"file"}
          accept="image/png,image/jpeg"
        />
        <ImageProduct src={imagePreview as string | undefined} alt="" />
        <PriceProduct>
          Preço -{" "}
          {productPrice?.length! > 0
            ? Number(productPrice).toLocaleString("pt-br", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            : ""}{" "}
          $
        </PriceProduct>
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
              onChange={(e) =>
                setProductPrice(
                  String(
                    e.target.value.length <= 11 ? e.target.value : productPrice
                  )
                )
              }
              value={String(productPrice)}
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
