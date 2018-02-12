class IndeterminateProgressDialog extends Dialog
{
    constructor(tittle, text="", buttons=null, type="indeterminated")
    {
        super(tittle, text, buttons, type);
    }

    show(callbackSuccess, callbackError, options = {})
    {
        window.SpinnerPlugin.activityStart(this.title, options, callbackSuccess, callbackError);
    }

    hide()
    {
        window.SpinnerPlugin.activityStop();
    }
}