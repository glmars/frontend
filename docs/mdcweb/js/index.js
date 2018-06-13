document.addEventListener('DOMContentLoaded', function()
{
	document.querySelectorAll('.mdc-text-field').forEach(function(element)
	{
		mdc.textField.MDCTextField.attachTo(element);
	});

	var formField = mdc.formField.MDCFormField.attachTo(document.querySelector('.mdc-form-field'));
	var checkbox = mdc.checkbox.MDCCheckbox.attachTo(document.querySelector('.mdc-checkbox'));
	formField.input = checkbox;

	mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button'));
});