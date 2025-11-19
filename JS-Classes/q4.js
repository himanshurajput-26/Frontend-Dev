class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    generateForm() {
        const container = document.getElementById("formContainer");
        container.innerHTML = "";

        this.fields.forEach(f => {
            container.innerHTML += `
                <label>${f.label}</label>
                <input type="${f.type}" id="${f.label}"><br><br>
            `;
        });
    }

    getFormData() {
        const data = {};
        this.fields.forEach(f => {
            data[f.label] = document.getElementById(f.label).value;
        });
        return data;
    }
}

const builder = new FormBuilder([
    {type: "text", label: "Username"},
    {type: "email", label: "Email"},
    {type: "password", label: "Password"}
]);

builder.generateForm();

document.getElementById("submitBtn").onclick = () => {
    document.getElementById("output").textContent =
        JSON.stringify(builder.getFormData(), null, 2);
};
