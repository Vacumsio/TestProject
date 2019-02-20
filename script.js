function changeStyle(bool) //Данные на входе в функию "Булевы"
{
	if (bool)
	{		
		style = error.style.visibility = "hidden";
	
	}
		else 
		{
			style = error.style.visibility = "visible";
			document.getElementById("error").innerHTML = "Введенная информация не корректна. Проверьте введенное значение и попробуйте еще раз.";
		}
}

function validDate(value) //проверка вводимой даты
{
	if (value==undefined || value=="") 
	{
		changeStyle(true);
		return;
	}
	
	const inputDate = new Date(value).toISOString().slice(0, 10); // введенная дата (обрезанная до год-месяц-день)
	const currentDate = new Date().toISOString().slice(0, 10); // текущая дата (обрезанная до год-месяц-день)
	const res = (inputDate < currentDate);
		(res) ? changeStyle(true) : changeStyle(false);
}


function checkData (personalData) //проверка строк ФИО
{	
	if(/[^А-яЁёA-z\. ]/.test(personalData))
	{
		changeStyle(false);
	}
		else
			changeStyle(true);
}
