/**
 * @file
 * @date 2024-08-01
 * @author haodong.wang
 * @lastModify  2024-08-01
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useParams } from "react-router-dom";
import { useMemo, useRef, useState } from "react";
import { ConfigProvider, theme } from "antd";
import Head from "./head";
import { dataList } from "../../constant/data";
import Easymail, {
  EasymailLangType,
  EasymailRefProps,
  EasymailSkinType,
} from "easy-mail-editor";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Detail = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { id } = useParams();

  const [lang, setLang] = useState<EasymailLangType>("en_US");
  const [skin, setSkin] = useState<EasymailSkinType>("light");

  const ref = useRef<EasymailRefProps>(null);

  const appData = useMemo(() => {
    if (id == "-1") return undefined;
    return dataList.find((i) => i.id === Number(id))?.tree;
  }, [id]);

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const handleSave = () => {
    console.log(ref.current?.getData().mjml);
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <ConfigProvider
      theme={{
        algorithm:
          skin === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
      }}
    >
      <Head
        id={id}
        lang={lang}
        setLang={setLang}
        skin={skin}
        setSkin={setSkin}
        handleSave={handleSave}
      ></Head>

      <Easymail
        lang={lang}
        width="100vw"
        height="calc(100vh - 60px)"
        skin={skin}
        ref={ref}
        value={appData}
        // onUpload={(file: File) => {
        //   return new Promise((resolve, reject) => {
        //     rejectRef.current = reject;
        //     setTimeout(async () => {
        //       try {
        //         const url = await fileToBase64(file);
        //         resolve({ url });
        //       } catch (error) {
        //         reject("upload error");
        //       }
        //     }, 5000);
        //   });
        // }}
        onUploadFocusChange={() => {
          // rejectRef.current("error");
          // rejectRef.current = null;
        }}
      ></Easymail>
    </ConfigProvider>
  );
};
export default Detail;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
