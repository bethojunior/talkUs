class Dialog
{
    constructor(title, text, type, buttons)
    {
        this.title = title;
        this.text = text;
        this.type = type;
        this.buttons = buttons;
    }
    show(callbackSuccess, callbackError = ()=>{}, options = null)
    {
        switch(this.type)
        {
            case "alert":
                navigator.notification.alert(this.text, callbackSuccess, this.title, this.buttons);
                break;
            case "confirm":
                navigator.notification.confirm(this.text, callbackSuccess, this.title, this.buttons);
                break;
            case "prompt":
                navigator.notification.prompt(this.text, callbackSuccess, this.title, this.buttons);
                break;
            case "beep":
                navigator.notification.beep(this.text, callbackSuccess, this.title, this.buttons);
                break;
        }
    }
    dismiss()
    {

    }
}