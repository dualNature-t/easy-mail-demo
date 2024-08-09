/**
 * @file
 * @date 2024-08-01
 * @author haodong.wang
 * @lastModify  2024-08-01
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { LeftOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, Flex, Select, theme } from "antd";
import { useNavigate } from "react-router-dom";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface IProps {
  id?: string;
  lang: string;
  setLang: (lang: "en_US" | "zh_CN") => void;
  skin: string;
  setSkin: (skin: "light" | "dark") => void;
  handleSave: () => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Head: React.FC<IProps> = ({
  id,
  lang,
  setLang,
  skin,
  setSkin,
  handleSave,
}): JSX.Element => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const { token } = theme.useToken();
  const navigate = useNavigate();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const handlePreview = () => {
    console.log(handleSave());
    window.open(`/easy-mail-demo/#/preview/${id}`);
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <Flex
      style={{
        height: 60,
        padding: "0 15px",
        borderBottom: `1px solid ${token.colorBorder}`,
        backgroundColor: token.colorBgLayout,
      }}
      justify="space-between"
      align="center"
    >
      <Button icon={<LeftOutlined />} type="text" onClick={() => navigate("/")}>
        返回
      </Button>
      <Flex gap={10} align="center">
        <div
          onClick={() => setSkin(skin === "dark" ? "light" : "dark")}
          style={{ color: token.colorText, marginRight: 10 }}
        >
          {skin === "dark" ? <MoonOutlined /> : <SunOutlined />}
        </div>

        <Select
          value={lang}
          style={{ width: 90 }}
          onChange={(value) => setLang(value as "en_US" | "zh_CN")}
          options={[
            { value: "zh_CN", label: "中文" },
            { value: "en_US", label: "English" },
          ]}
        />

        {id !== "-1" && <Button onClick={handlePreview}>预览</Button>}

        <Button onClick={handleSave}>保存</Button>
      </Flex>
    </Flex>
  );
};
export default Head;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
