import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/forms/AppForm";
import AppFormPicker from "../components/forms/AppFormPicker";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor:'red', icon: 'apps' },
  { label: "Cars", value: 2, backgroundColor:'green', icon: 'email' },
  { label: "Cameras", value: 3, backgroundColor:'blue', icon: 'lock' },
  { label: "Games", value: 4, backgroundColor:'blue', icon: 'lock' },
  { label: "Clothing", value: 5, backgroundColor:'blue', icon: 'lock' },
  { label: "Sports", value: 3, backgroundColor:'blue', icon: 'lock' },
  { label: "Movies & Music", value: 6, backgroundColor:'blue', icon: 'lock' },
  { label: "Books", value: 7, backgroundColor:'blue', icon: 'lock' },
  { label: "Others", value: 8, backgroundColor:'blue', icon: 'lock' },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker items={categories} name="category" numberOfColumns={3} placeholder="Category" width="50%" PickerItemComponent={CategoryPickerItem}/>
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;