function generateEnvironmentContent() {
  return `export const environment = {
    production: ${process.env.NODE_ENV === 'production'},
    foodSpecialsSas: '${process.env.FOOD_SPECIALS_SAS || ""}',
    foodSpecialsUrl: '${process.env.FOOD_SPECIALS_URL || ""}',
    liquorSpecialsSas: '${process.env.LIQUOR_SPECIALS_SAS || ""}',
    liquorSpecialsUrl: '${process.env.LIQUOR_SPECIALS_URL || ""}',
    generalSas: '${process.env.GENERAL_SAS || ""}',
    generalUrl: '${process.env.GENERAL_URL || ""}',
    ownerName: '${process.env.OWNER_NAME || ""}',
    managerName: '${process.env.MANAGER_NAME || ""}',
    foodImageName: '${process.env.FOOD_IMAGE_NAME || ""}',
    liquorImageName: '${process.env.LIQUOR_IMAGE_NAME || ""}',
    contactImageName: '${process.env.CONTACT_IMAGE_NAME || ""}',
    logoName: '${process.env.LOGO_NAME || ""}',
  };`;
}

(function generateEnvironment() {
  const fs = require("fs");
  const fileName = "environment.ts"; // you can use this as a hard-coded name, or you can use your own unique name
  const content = generateEnvironmentContent();
  const dir = `src/environments`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true }); // Create directory if it does not exist
  }
  fs.writeFile(`${dir}/${fileName}`, content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Environment file created successfully!");
    }
  });
})();
