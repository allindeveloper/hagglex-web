import React, { useState } from "react";
import DoubleTabSections from "../../components/shared/DoubleTabSections";
import CustomButton from "../../components/ui/CustomButton/CustomButton";
import CustomInput from "../../components/ui/CustomInput/CustomInput";
import { Space } from "../../components/ui/Space/Space";
import dashboardStyles from "../../styles/dashboardStyles";
import { Divider, Theme, useMediaQuery } from "@mui/material";
import updown from "../../assets/svg/updown.svg";
import infoicon from '../../assets/svg/infoicon.svg'



type SendT = {
  amount: string;
  address: string;
};

const Send = () => {
  const classes = dashboardStyles();
  const [selected, setselected] = useState(1);
  const matchesMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const matchesXS = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("xs")
  );

  const handleClickTab = (index: number) => {
    setselected(index);
  };
  const [data, setData] = useState<SendT>({
    amount: "0.00",
    address: "",
  });
  const handleCreateFormInputChange = (
    input: string,
    label: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { target } = e;
    setData((prevState) => ({
      ...prevState,
      [input]: target?.value,
    }));
  };

  return (
    <div className={classes.sendRoot}>
      <DoubleTabSections
        selected={selected}
        labelOne={"External Wallet"}
        labelTwo={"Hagglex Wallet"}
        handleClickTab={handleClickTab}
        componentOne={
          <div className={classes.componentOneRoot}>
            <p className="mb-0">
              <b>Amount to Send</b>
            </p>
            <div className="d-flex justify-content-start">
              <div>
                <CustomInput
                  variant="standard"
                  value={data.amount}
                  name="amount"
                  type="number"
                  fontWeight={400}
                  fontSize={40}
                  className="mt-0"
                  placeholder=""
                  endIcon={
                    <div
                      style={{
                        position: "absolute",
                        left: `${data.amount.length / 0.17}%`,
                        bottom: "16%",
                      }}
                    >
                      {!matchesMobile&&<small className="ms-2">
                        <b>NGN</b>
                      </small>}
                    </div>
                  }
                  handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleCreateFormInputChange("amount", "Amount", e)
                  }
                  inputContainerclassName="mt-0"
                />
              </div>
              <div className="mt-5 ms-1">
                <img
                  className="mt-1"
                  src={updown}
                  width={"90%"}
                  height={"90%"}
                />
              </div>
            </div>

            <Space top={20} />
            <p className={classes.sendTo}>Send to</p>
            <CustomInput
              variant="outlined"
              placeholder="Paste wallet address"
              value={data.address}
              name="address"
              type="text"
              noStyles
              inputHeight={15}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleCreateFormInputChange("address", "Address", e)
              }
              customButtonText={
                <div className="float-end mt-1 text-muted">
                  <small>Transaction Fees: 0.000000000BTC</small>
                </div>
              }
            />
            <CustomButton text="Send BTC" className="mt-4" />
            <div className={classes.sendOnly}>
              <div>
                <img src={infoicon} width={25}/>
                </div>
                <div className="ms-3 pt-0 pb-1">
                  <b><small>Send only BTC to this deposit address</small></b>
                </div>
            </div>
            <Space top={60} />
            <Divider light />
            <Space top={25} />
            <ol className="pb-3">
              <li>
                <small>Paste a BTC address only through this means.</small>
              </li>
              <li>
                <small>
                  Sending coins or token other than BTC to this address may
                  result in the loss of your tokens
                </small>
              </li>
            </ol>
          </div>
        }
        componentTwo={<div></div>}
      />
    </div>
  );
};
export default Send;
