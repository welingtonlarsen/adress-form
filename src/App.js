import React from "react";
import { Formik, Field, Form } from "formik";
import "./App.css";

function App() {
  function onSubmit(values, actions) {
    actions.resetForm(true);
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;
    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
        setFieldValue("uf", data.uf);
      });
  }

  return (
    <div className="App">
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          cep: "",
          logradouro: "",
          numero: "",
          complemento: "",
          bairro: "",
          cidade: "",
          uf: "",
        }}
        render={({ setFieldValue }) => (
          <Form>
            <div className="form-control-group">
              <label>Cep</label>
              <Field
                name="cep"
                type="text"
                onBlur={(ev) => onBlurCep(ev, setFieldValue)}
              />
            </div>
            <div className="form-control-group">
              <label>Logradouro</label>
              <Field name="logradouro" type="text" />
            </div>
            <div className="form-control-group">
              <label>Número</label>
              <Field name="numero" type="text" />
            </div>
            <div className="form-control-group">
              <label>Complemento</label>
              <Field name="complemento" type="text" />
            </div>
            <div className="form-control-group">
              <label>bairro</label>
              <Field name="bairro" type="text" />
            </div>
            <div className="form-control-group">
              <label>Cidade</label>
              <Field name="cidade" type="text" />
            </div>
            <div className="form-control-group">
              <label>Estado</label>
              <Field name="uf" type="text" />
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
