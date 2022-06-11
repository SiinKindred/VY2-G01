const {REACT_APP_API_URL} = process.env;

export class User {
    partner_id: string = "";
    password: string = "";
    name: string = "";
    email: string = "";
    gender: Boolean = false;
    dob: Date = new Date;
    phone: string = "";
    address: string = "";
    type: string = "";
    reward: number = 0;
    company_name: string = "";

    constructor(data?: any) {
        if (data) {
            const {partner_id, password, name, email, gender, dob, phone, address, type, reward, company_name} = data;
            this.partner_id = partner_id;
            this.password = password;
            this.name = name;
            this.email = email;
            this.gender = gender;
            this.dob = dob instanceof Date ? dob : new Date(dob);
            this.phone = phone;
            this.address = address;
            this.type = type;
            this.reward = reward;
            this.company_name = company_name;
        }
    }


    static async changePassword(old_password: string, new_password: string) {
        const res = await fetch(REACT_APP_API_URL + "/api/user/change-password", {
                method: "POST",
                body: JSON.stringify({old_password, new_password}),
                headers: {
                    authorization: "Bearer " + localStorage.getItem("access_token"),
                    'Content-Type': 'application/json'
                }
            })
        ;
        return res.json();
    }

    static async changeInfo(user: User) {
        const res = await fetch(REACT_APP_API_URL + "/api/user/me", {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
                authorization: "Bearer " + localStorage.getItem("access_token"),
            }
        });
        return res.json();
    }
}
