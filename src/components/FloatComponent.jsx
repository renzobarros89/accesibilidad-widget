import React from "react";
import styles from "./FloatComponent.module.css";
import {
  CloseOutlined,
  AudioOutlined,
  AimOutlined,
  BorderlessTableOutlined,
  EyeOutlined,
  GatewayOutlined,
} from "@ant-design/icons";
import { Button, Card, Row } from "antd";

const FloatComponent = ({ setShowTable }) => {
  return (
    <div className={styles.floatComponent}>
      <Row justify="space-between" className={styles.titulo}>
        <p>Menú de Accesibilidad - Secretaría de Modernización</p>
        <Button
          shape="circle"
          icon={<CloseOutlined />}
          onClick={() => setShowTable(false)}
        />
      </Row>
      <Row justify="space-around">
        <Card className={styles.item}>
          <Button onClick={() => setShowTable(false)} type="link">
            <AudioOutlined style={{ fontSize: "32px", color: "#08c" }} />
            <p>Texto a voz</p>
          </Button>
        </Card>
        <Card className={styles.item}>
          <AimOutlined className={styles.icon} />
        </Card>
        <Card className={styles.item}>
          <BorderlessTableOutlined className={styles.icon} />
        </Card>
        <Card className={styles.item}>
          <EyeOutlined className={styles.icon} />
        </Card>
        <Card className={styles.item}>
          <GatewayOutlined className={styles.icon} />
        </Card>
        <Card className={styles.item}></Card>
        <Card className={styles.item}></Card>
      </Row>
    </div>
  );
};

export default FloatComponent;
