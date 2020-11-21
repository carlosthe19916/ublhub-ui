const newCompanySchema = {
  fields: [
    {
      component: "sub-form",
      title: "Company",
      description: "A company contains all files like XMLs or CDRs",
      name: "details",
      fields: [
        {
          component: "text-field",
          name: "name",
          label: "Name",
          type: "text",
          isRequired: true,
          validate: [
            {
              type: "required",
            },
            {
              type: "min-length",
              threshold: 3,
            },
          ],
        },
      ],
    },
    {
      component: "sub-form",
      title: "SUNAT Web services",
      name: "webServices",
      fields: [
        {
          component: "text-field",
          name: "webServices.factura",
          label: "Factura",
          type: "text",
          isRequired: true,
          validate: [
            {
              type: "required",
            },
            {
              type: "min-length",
              threshold: 1,
            },
            {
              type: "url",
            },
          ],
        },
        {
          component: "text-field",
          name: "webServices.guia",
          label: "Guía",
          type: "text",
          isRequired: true,
          validate: [
            {
              type: "required",
            },
            {
              type: "min-length",
              threshold: 1,
            },
            {
              type: "url",
            },
          ],
        },
        {
          component: "text-field",
          name: "webServices.retenciones",
          label: "Retenciones",
          type: "text",
          isRequired: true,
          validate: [
            {
              type: "required",
            },
            {
              type: "min-length",
              threshold: 1,
            },
            {
              type: "url",
            },
          ],
        },
      ],
    },
    {
      component: "sub-form",
      title: "SUNAT Credentials",
      name: "credentials",
      fields: [
        {
          component: "text-field",
          name: "credentials.username",
          label: "Username",
          type: "text",
          isRequired: true,
          validate: [
            {
              type: "required",
            },
            {
              type: "min-length",
              threshold: 3,
            },
          ],
        },
        {
          component: "text-field",
          name: "credentials.password",
          label: "Password",
          type: "password",
          isRequired: true,
          validate: [
            {
              type: "required",
            },
            {
              type: "min-length",
              threshold: 3,
            },
          ],
        },
      ],
    },
  ],
};

export default newCompanySchema;
