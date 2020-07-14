import React from 'react';
import { Formik, Field, Form } from 'formik';
import './App.css';

function App() {
  function onSubmit(values, actions) {

  }

  function onBlurCep(ev, setValue) {
    const { value } = ev.target;
    const cep = value?.replace(/[^0-9]/g, '');
    
    if(cep?.length !== 8) {
      return;
    }

    

  }


  return (
    <div className="App">
      <Formik
        onSubmit={onSubmit} 
        initialValues={{
          cep: '',
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          cidade: '',
          uf: '',
        }}

        render = {({setValue}) => (
          <Form>
            <div>
              <label>Cep</label>
              <Field name="cep" type="text" onBlur={(ev) =>onBlurCep(ev, setValue)} />
            </div>
            <div>
              <label>Logradouro</label>
              <Field name="logradouro" type="text" />
            </div>
            <div>
              <label>Número</label>
              <Field name="numero" type="text" />
            </div>
            <div>
              <label>Complemento</label>
              <Field name="complemento" type="text" />
            </div>
            <div>
              <label>bairro</label>
              <Field name="bairro" type="text" />
            </div>
            <div>
              <label>Cidade</label>
              <Field name="cidade" type="text" />
            </div>
            <div>
              <label>Estado</label>
              <Field name="estado" type="text" />
            </div>
            <button type="submit" >Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
