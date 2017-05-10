(function($) { 
 var storage_cur_month = localStorage.getItem('cur_month');
  var storage_cur_year = localStorage.getItem('cur_year');  
  var curDate   = new Date();
  var curMonth = curDate.getMonth() + 1;
  var curYear  = curDate.getYear() + 1900;
  if (parseInt(storage_cur_month)) curMonth = +storage_cur_month + 1; else storage_cur_month = curMonth;
  if (parseInt(storage_cur_year)) curYear = +storage_cur_year; else storage_cur_year = curYear;


   
	function calendarWidget(el, params) { 
		
		
		var thismonth = curMonth;
		var thisyear  = curYear;
		
		var opts = {
			month: thismonth,
			year: thisyear
		};
		
		$.extend(opts, params);
		
		var monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
		var dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
		month = i = parseInt(opts.month) - 1;
		year = parseInt(opts.year);
		var m = 0;
		var table = '';		
					
			table += ('<div class="nav-prev">'+ '</div>');	
			table += ('<h3 id="current-month" data-month="'+month+'">'+monthNames[month]+'&nbsp;&nbsp;&nbsp;'+year+'</h3>');			
			table += ('<div class="nav-next" >' + '</div>');

			table += ('<table class="calendar-month " ' +'id="calendar-month'+i+' " cellspacing="0">');	
		
			table += '<tr>';
			
			for (d=0; d<7; d++) {
				table += '<th class="weekday">' + dayNames[d] + '</th>';
			}
			
			table += '</tr>';
		
			var days = getDaysInMonth(month,year);
            var firstDayDate=new Date(year,month,1);
            var firstDay=firstDayDate.getDay();
			
			var prev_days = getDaysInMonth(month,year);
            var firstDayDate=new Date(year,month,1);
            var firstDay=firstDayDate.getDay();
			
			var prev_m = month == 0 ? 11 : month-1;
			var prev_y = prev_m == 11 ? year - 1 : year;
			var prev_days = getDaysInMonth(prev_m, prev_y);
			firstDay = (firstDay == 1 && firstDayDate) ? 8 : firstDay;
			+firstDay --;
			var i = 0;
            for (j=0;j<42;j++){
			  
              if ((j<firstDay)){
                table += ('<td class="other-month"><span class="day">'+ (prev_days-firstDay+j+1) +'</span></td>');
			  } else if ((j>=firstDay+getDaysInMonth(month,year))) {
				i = i+1;
                table += ('<td class="other-month"><span class="day">'+ i +'</span></td>');			 
              }else{
                table += ('<td class="current-month day'+(j-firstDay+1)+'"><span class="day">'+(j-firstDay+1)+'</span></td>');
              }
              if (j%7==6)  table += ('</tr>');
            }

            table += ('</table>');

		el.html(table);
	}
	
	function getDaysInMonth(month,year)  {
		var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
		if ((month==1)&&(year%4==0)&&((year%100!=0)||(year%400==0))){
		  return 29;
		}else{
		  return daysInMonth[month];
		}
	}
	
	
	// jQuery plugin initialisation
	$.fn.calendarWidget = function(params) {    
		calendarWidget(this, params);

	$('.nav-next').click(function(){    
    	var m = $("#calendar h3").data("month");
    	m = +m + 2;    	
    	if(m == 13) { 
    		m = 1;    		
    		storage_cur_year = +storage_cur_year + 1;
    	};
    	storage_cur_month = m;
    	localStorage.setItem('cur_month', storage_cur_month);
   	 	localStorage.setItem('cur_year', storage_cur_year);
    	$("#calendar").html('');
     	$("#calendar").calendarWidget({
      		month: parseInt(storage_cur_month), // номер месяца 
      		year: parseInt(storage_cur_year)              
  		});
  	}); 

  	$('.nav-prev').click(function(){    
    	var m = $("#calendar h3").data("month");
    	//m = +m + 2;    	
    	if(m == 0) { 
    		m = 12;     		
    		storage_cur_year = +storage_cur_year - 1;
    	}
    	storage_cur_month = m;
    	localStorage.setItem('cur_month', storage_cur_month);
   	 	localStorage.setItem('cur_year', storage_cur_year);
    	$("#calendar").html('');
     	$("#calendar").calendarWidget({
      		month: parseInt(storage_cur_month), // номер месяца 
      		year: parseInt(storage_cur_year)              
  		});
  	}); 

		return this; 
	}; 

})(jQuery);
