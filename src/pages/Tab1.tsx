import { IonContent, IonHeader, IonInput, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import DatePickersContainer from '../components/DatePickersContainer';
import { Formik, Field,  } from "formik";
import { FormGroup, FormHelperText, FormLabel, Input, TextField } from "@mui/material";
import { MobileDatePicker, PickersInput, PickersInputBase} from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import React from 'react';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonModal isOpen={true}>
          <Formik initialValues={{}} onSubmit={() => {}}>
            <DatePickersContainer>
              <Field name="dateFrom" >
              {({ field, form: { errors } }: any) => {
                // console.log(field);
                return (

                  <FormGroup>
                      <FormLabel
                        sx={{
                          alignSelf: "start",
                          mb: 1,
                          fontWeight: "bold",
                          color: 'white',
                          
                          }}
                          >from*</FormLabel>
                      <MobileDatePicker
                        label="from"
                        views={["month"]}
                        sx={{borderColor: 'white', borderWidth: 2, borderStyle: 'solid'}}
                        slots={{
                          textField: (props) => (
                            <React.Fragment>
                              <TextField
                                {...props}
                                label={null}
                                placeholder="from*"
                                />
                              <FormHelperText error={!!errors["dateFrom"]}>
                                {errors["dateFrom"]}
                              </FormHelperText>
                            </React.Fragment>
                          ),
                        }}
                        />
                    </FormGroup>
                        )}}
              </Field>
            </DatePickersContainer>
          </Formik>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
