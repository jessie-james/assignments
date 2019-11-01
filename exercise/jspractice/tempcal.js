
    <head>
        <script language="JavaScript">
            <!-- hide this script from old browsers
            function temp(form)
{
  var f = parseFloat(form.DegF.value, 10);
            var c = 0;
            c = (f - 32.0) * 5.0 / 9.0;
            form.DegC.value = c;
          }
          // done hiding from old browsers -->
</script>
    </head>
    <body>
        <FORM>
            <h2>Fahrenheit to Celsius Converter</h2>
            Enter a temperature in degrees F:
<INPUT NAME="DegF" VALUE="0" MAXLENGTH="15" SIZE=15>
<p>
                Click this button to calculate the temperature
                in degrees C:
<INPUT NAME="calc" VALUE="Calculate" TYPE=BUTTON
                    onClick=temp(this.form)>
<p>
                    Temperature in degrees C is:
<INPUT NAME="DegC" READONLY SIZE=15>
