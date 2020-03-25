export default {
  title: "Machines",
  name: "machine",
  type: "document",
  fields: [
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
      title: "Latitude",
      name: "lat",
      type: "number",
    },
    {
      title: "Longitude",
      name: "long",
      type: "number",
    },
    {
      title: 'Hours',
      name: 'hours',
      type: 'array',
      of: [{
        type: 'string'
      }]
    },
    {
      title: "Thumb",
      name: "thumb",
      type: "image",
    }
  ]
};