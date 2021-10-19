import * as React from 'react';
import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import ErrorMessage from '../../components/ErrorMessage';

import Colors from '../../res/colors';
import {ScrollView} from 'react-native-gesture-handler';

export default () => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      businessName: '',
      Address: '',
      Category: '',
      Phone: '',
      Email: '',
      Website: '',
    },
  });
  const onSubmit = data => {
    console.log(data);
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log('errors', errors);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Registra tu Negocio</Text>
      <Text style={styles.label}>Nombre del negocio</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="businessName"
        rules={{
          required: 'Este campo es requerido',
        }}
      />
      <ErrorMessage errors={errors} name="businessName" />

      <Text style={styles.label}>Dirección</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="address"
        rules={{required: 'Este campo es requerido'}}
      />
      <ErrorMessage errors={errors} name="address" />

      <Text style={styles.label}>Categoría</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="category"
        rules={{required: 'Este campo es requerido'}}
      />
      <ErrorMessage errors={errors} name="category" />

      <Text style={styles.label}>Teléfono</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="phone"
        rules={{
          required: 'Este campo es requerido',
          pattern: {
            value: /^\d+$/,
            message: 'Ingrese un número de teléfono válido',
          },
        }}
      />
      <ErrorMessage errors={errors} name="phone" />

      <Text style={styles.label}>Correo electrónico</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{
          required: 'Este campo es requerido',
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Ingrese un correo electrónico válido', // JS only: <p>error message</p> TS only support string
          },
        }}
      />
      <ErrorMessage errors={errors} name="email" />

      <Text style={styles.label}>Sitio Web (opcional)</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="website"
        rules={{
          required: false,
          pattern: {
            value:
              /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
            message: 'Ingrese un sitio web válido', // JS only: <p>error message</p> TS only support string
          },
        }}
      />
      <ErrorMessage errors={errors} name="website" />

      <Text style={styles.label}>Descripción del negocio</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            multiline
            numberOfLines={5}
            style={styles.inputArea}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="description"
        rules={{required: 'Este campo es requerido'}}
      />
      <ErrorMessage errors={errors} name="description" />

      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.text}>Enviar</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    margin: 20,
    marginBottom: 16,
    marginLeft: 0,
  },

  button: {
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 32,
    marginRight: 32,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: Colors.primaryRed,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },

  container: {
    flex: 1,
    paddingTop: 16,
    padding: 8,
    backgroundColor: 'white',
  },
  input: {
    backgroundColor: 'white',
    borderColor: Colors.zircon,
    borderWidth: 1,
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  inputArea: {
    backgroundColor: 'white',
    borderColor: Colors.zircon,
    textAlignVertical: 'top',
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
});
