/**
 * @file
 * @date 2024-08-02
 * @author haodong.wang
 * @lastModify  2024-08-02
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import mjml2html from "mjml-browser";
import { dataList } from "../../constant/data";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Preview = (): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { id } = useParams();

  const appData = useMemo(() => {
    if (id == "-1") return undefined;
    return JSON.parse(
      dataList.find((i) => i.id === Number(id))?.tree as string
    );
  }, [id]);
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <div
      style={{ height: "100vh", overflow: "auto" }}
      dangerouslySetInnerHTML={{ __html: mjml2html(appData).html }}
    ></div>
  );
};
export default Preview;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
