export default {
  // This is the display name for the type
  title: "Machine",
  
  // The identifier for this document type used in the api's
  name: "machine",
  
  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",
  
  // Now we proceed to list the fields of our document
  fields: [
    // This document has only one field
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Location",
      name: "location",
      type: "string",
    },
    {
      title: "Address",
      name: "address",
      type: "string",
    },
    {
      title: "Hours",
      name: "hours",
      type: "string",
    },
    {
      title: "Thumb",
      name: "thumb",
      type: "image",
    }
  ]
};