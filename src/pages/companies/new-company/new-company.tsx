import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Alert, PageSection, Stack, StackItem } from "@patternfly/react-core";

import FormRenderer from "@data-driven-forms/react-form-renderer/dist/cjs/form-renderer";
import Pf4FormTemplate from "@data-driven-forms/pf4-component-mapper/dist/cjs/form-template";
import componentMapper from "@data-driven-forms/pf4-component-mapper/dist/cjs/component-mapper";

import { useDispatch } from "react-redux";
import { alertActions } from "store/alert";

import { Paths } from "Paths";
import newCompanySchema from "./schemaForm";
import { createCompany } from "api/rest";
import { AxiosError } from "axios";
import { getAxiosErrorMessage } from "utils/modelUtils";

export interface CompanyListProps extends RouteComponentProps {}

export const NewCompany: React.FC<CompanyListProps> = ({ history }) => {
  const dispatch = useDispatch();
  const [conflictErrorMsg, setConflictErrorMsg] = useState("");

  const handleOnSubmit = (formValues: any) => {
    return createCompany(formValues)
      .then(() => {})
      .catch((error: AxiosError) => {
        if (error.code === "409") {
          setConflictErrorMsg(
            `The name '${formValues.name}' is already taken.`
          );
        } else {
          dispatch(
            alertActions.addAlert(
              "danger",
              "Error",
              getAxiosErrorMessage(error)
            )
          );
        }
      });
  };

  const handleOnCancel = () => {
    history.push(Paths.companyList);
  };

  return (
    <PageSection variant="light">
      <Stack hasGutter>
        {conflictErrorMsg && (
          <StackItem>
            <Alert variant="danger" title={conflictErrorMsg} />
          </StackItem>
        )}
        <StackItem>
          <FormRenderer
            schema={newCompanySchema}
            FormTemplate={(props) => <Pf4FormTemplate {...props} />}
            componentMapper={componentMapper}
            onSubmit={handleOnSubmit}
            onCancel={handleOnCancel}
          />
        </StackItem>
      </Stack>
    </PageSection>
  );
};