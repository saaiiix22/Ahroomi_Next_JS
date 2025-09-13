"use client";
import * as React from "react";
import Styles from "./address.module.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepLabel from "@mui/material/StepLabel";
import { useRouter } from "next/navigation";

const steps = ["Add Address", "Confirm Details", "Select Payment Menthod"];

export default function AddressPage() {


  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => steps.length;
  const completedSteps = () => Object.keys(completed).length;
  const isLastStep = () => activeStep === totalSteps() - 1;
  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleStep = (step) => () => setActiveStep(step);

  const handleComplete = () => {
    setCompleted({ ...completed, [activeStep]: true });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const router = useRouter();
  const handlePaymentConfirm = (e) => {
    e.preventDefault();
    setCompleted({ ...completed, [activeStep]: true });
    router.push("/orderconfirm");
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className={Styles.stepSection}>
            <h3 className={Styles.stepTitle}>Step 1: Add Address</h3>
            <form className={Styles.form}>
              <div className="grid grid-cols-12 gap-5 justify-center">
                <div className="col-span-4">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="col-span-4">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="col-span-4">
                  <input type="text" placeholder="Phone" />
                </div>
                <div className="col-span-12">
                  <input type="text" placeholder="Street" />
                </div>
                <div className="col-span-6">
                  <input type="text" placeholder="City" />
                </div>
                <div className="col-span-6">
                  <input type="text" placeholder="State" />
                </div>
                <div className="col-span-4">
                  <input type="text" placeholder="Zip Code" />
                </div>
                <div className="col-span-4">
                  <input type="text" placeholder="Landmark" />
                </div>
                <div className="col-span-4">
                  <input type="text" placeholder="Building / Apartment Number" />
                </div>
                <div className="col-span-12 flex justify-center">
                  <button type="submit" className={Styles.saveBtn} onClick={handleComplete}>
                    Save Address
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      case 1:
        return (
          <div className={Styles.stepSection}>
            <h3 className={Styles.stepTitle}>Step 2: Confirm Details</h3>
            <p className={Styles.confirmText}>Please confirm your entered address before proceeding. *</p>
            <form className={Styles.form}>
              <div className="grid grid-cols-12 gap-5 justify-center">
                <div className="col-span-4">
                  <input type="text" placeholder="Name" value="Prasanta Kumar Singh" readOnly />
                </div>
                <div className="col-span-4">
                  <input type="text" placeholder="Email" value="prasanta22@gmail.com" readOnly />
                </div>
                <div className="col-span-4">
                  <input type="text" placeholder="Phone" value="+91 1234567890" readOnly />
                </div>
                <div className="col-span-12">
                  <input type="text" placeholder="Street" value="Unit-4, Ashok Nagar" readOnly />
                </div>
                <div className="col-span-6">
                  <input type="text" placeholder="City" value="Bhubaneswar" readOnly />
                </div>
                <div className="col-span-6">
                  <input type="text" placeholder="State" value="Odisha" readOnly />
                </div>
                <div className="col-span-4">
                  <input type="text" placeholder="Zip Code" value="751009" readOnly />
                </div>
                <div className="col-span-4">
                  <input type="text" placeholder="Landmark" value="Near Ram Mandir" readOnly />
                </div>
                <div className="col-span-4">
                  <input type="text" placeholder="Building / Apartment Number" value="Flat 302, Sai Residency" readOnly />
                </div>
                <div className="col-span-12 flex justify-center" onClick={handleComplete}>
                  <button type="submit" className={Styles.saveBtn}>
                    Confirm Address
                  </button>
                </div>
              </div>

            </form>

          </div>
        );
      case 2:
        return (
          <div className={Styles.stepSection}>
            <h3 className={Styles.stepTitle}>Step 3: Select Payment Menthod</h3>
            <form className={Styles.form}>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <select className={Styles.selectInput}>
                    <option value="">-- Select Payment Method --</option>
                    <option value="cod" >Cash on Delivery</option>
                    <option value="card">Credit / Debit Card</option>
                    <option value="upi">UPI / Net Banking</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <input type="text" placeholder="Card Holder Name" />
                </div>
                <div className="col-span-6">
                  <input type="text" placeholder="Card Number" />
                </div>
                <div className="col-span-4">
                  <input type="text" placeholder="Expiry (MM/YY)" />
                </div>
                <div className="col-span-4">
                  <input type="text" placeholder="CVV" />
                </div>
                <div className="col-span-4">
                  <input type="text" placeholder="Zip Code" />
                </div>

                <div className="col-span-12 flex justify-center">
                  <button type="button" className={Styles.saveBtn} onClick={handlePaymentConfirm} >
                    Confirm Payment
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <div className={Styles.addressWrapper}>
      <Box sx={{ width: "100%" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton onClick={handleStep(index)}>
                <StepLabel
                  sx={{
                    "& .MuiStepIcon-root": {
                      color: activeStep === index ? "#275140" : "#D5E5D5",
                    },
                    "& .MuiStepIcon-root.Mui-active": {
                      color: "#275140",
                    },
                    "& .MuiStepIcon-root.Mui-completed": {
                      color: "#275140",
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>

        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              {/* All steps completed – you&apos;re finished */}

            </React.Fragment>
          ) : (
            <React.Fragment>

              <div style={{ marginTop: "20px" }}>
                {getStepContent(activeStep)}
              </div>

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext} sx={{ mr: 1, color: "#275140" }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block", color: "#fff", background: "#f97316", padding: "5px 14px", borderRadius: "3px", display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    ""
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </div>
  );
}
