import React, { useState } from "react";
import { FloatButton } from "antd";
import { ControlOutlined } from "@ant-design/icons";
import FloatComponent from "./FloatComponent";

const Accesibilidad = () => {
  const [showTable, setShowTable] = useState(false);
  return (
    <>
      {showTable && <FloatComponent setShowTable={setShowTable} />}

      <FloatButton
        shape="circle"
        type="primary"
        style={{
          right: 94,
        }}
        icon={<ControlOutlined />}
        onClick={() => setShowTable(!showTable)}
      />
    </>
  );
};

export default Accesibilidad;
