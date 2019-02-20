function changeStyle(bool)
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

function validDate(val) {
	const inputDate = new Date(val).toISOString().slice(0, 10); // введенная дата (обрезанная до год-месяц-день)
	const currentDate = new Date().toISOString().slice(0, 10); // текущая дата (обрезанная до год-месяц-день)
	const res = (inputDate < currentDate); // сравниваем...
		(res) ? changeStyle(true) : changeStyle(false); // выводим ок или не ок
	return res; // возвращаем true или false
}

function readIn(mean) //чтение строки Input
{
	var data = document.getElementsByTagName("input")[mean].value;
	return data;
}

function checkMean(mean)
{
	if(document.getElementById("surname").value.replace(/\s+/g, '').length)
	{
		mean=0;
		return mean;
	}
	if(document.getElementById("name").value.replace(/\s+/g, '').length)
	{
		mean=1;
		return mean;
	}
	if(document.getElementById("fathers_name").value.replace(/\s+/g, '').length)
	{
		mean=2;
		return mean;
	}
		
}

function checkData() //проверка строки Input на наличие ошибок
{	var mean = checkMean();
	var userData = readIn(mean);
	
	if (isNaN(userData)) 
	{
		changeStyle(true)
		return style;
	}
		else
		{
			if(userData == "")
			{
				changeStyle(true)
				return style;
			}
				else if (!isNaN(userData))
				{
					changeStyle(false);
					return style;
				}
		}
}
