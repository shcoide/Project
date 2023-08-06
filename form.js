function REGISTRATION(event) {
    event.preventDefault();
    const Namefirst = document.getElementById("fname").value;
    const Namelast = document.getElementById("lname").value;
    const Namecomp = document.getElementById("cname").value;
    const Email = document.getElementById("Email").value;
    const Telephone = document.getElementById("num").value;

    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regPhone = /^\d+$/;
    const regName = /\d+10$/;

    if (Namefirst == "" || regName.test(Name)) {
        window.alert("Please enter your name properly.");
        document.Namefirst.focus();
        return false;
    }
    if (Namelast == "" || regName.test(Name)) {
        window.alert("Please enter your name properly.");
        document.Namelast.focus();
        return false;
    }
    if (Namecomp == "" || regName.test(Name)) {
        window.alert("Please enter your name properly.");
        document.Namecomp.focus();
        return false;
    }
    if (Email == "" || !regEmail.test(Email)) {
        window.alert("Please enter a valid e-mail address.");
        document.Email.focus();
        return false;
    }
    if (Telephone == "" || !regPhone.test(Telephone) || isNaN(Telephone)) {
        alert("Please enter a valid phone number.");
        document.Telephone.focus();
        return false;
    }

    return true;
    document.getElementById("form").submit();
}