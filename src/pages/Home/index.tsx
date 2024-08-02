/**
 * @file
 * @date 2024-08-01
 * @author haodong.wang
 * @lastModify  2024-08-01
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button, Card, Flex, List, theme, Typography } from "antd";
import { dataList } from "../../constant/data";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
const { Meta } = Card;
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Home = (): JSX.Element => {
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
  const handleAdd = () => {
    navigate("/detail/-1");
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        style={{
          height: 70,
          background: "rgb(0, 21, 41)",
          color: token.colorWhite,
          lineHeight: "70px",
          padding: "0px 20px",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        <div>Easy Mail Editor</div>
        <Button
          type="link"
          onClick={() =>
            window.open("https://github.com/dualNature-t/easy-mail")
          }
        >
          Github
        </Button>
      </Flex>
      <div
        style={{
          height: "calc(100vh - 70px)",
          overflow: "auto",
        }}
      >
        <List
          style={{ width: "90%", margin: "0 auto" }}
          header={
            <Flex justify="space-between" align="center">
              <Typography.Title level={4} style={{ marginTop: "0.5em" }}>
                模板
              </Typography.Title>
              <Button type="text" icon={<PlusOutlined />} onClick={handleAdd}>
                添加
              </Button>
            </Flex>
          }
          grid={{
            gutter: 30,
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
            xl: 6,
            xxl: 7,
          }}
          pagination={{
            pageSize: 14,
            style: { marginBottom: 24 },
          }}
          dataSource={dataList}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              onClick={() => navigate(`/detail/${item.id}`)}
            >
              <Card
                styles={{ body: { padding: 10 } }}
                hoverable
                cover={<img src={item.cover_img} />}
              >
                <Meta title={item.name} />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};
export default Home;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
