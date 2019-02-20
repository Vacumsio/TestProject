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
	return style;
}

function validDate(value) //проверка вводимой даты
{
	const inputDate = new Date(value).toISOString().slice(0, 10); // введенная дата (обрезанная до год-месяц-день)
	const currentDate = new Date().toISOString().slice(0, 10); // текущая дата (обрезанная до год-месяц-день)
	const res = (inputDate < currentDate); // сравниваем...
		(res) ? changeStyle(true) : changeStyle(false); // выводим ок или не ок
	return res; // возвращаем true или false
}


function checkData (personalData) //проверка строк ФИО
{	
	
	if (isNaN(personalData)) 
	{
		changeStyle(true);
	}
		else if (!isNaN(personalData))
		{
			changeStyle(false);
		}		
}
