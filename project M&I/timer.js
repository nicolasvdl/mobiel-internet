var index = 0;
var obj = new Timer();
obj.Interval = 1000;
obj.Tick = timer_tick;
obj.Start();

function timer_tick()
{
	index  = index + 1;
	console.log(index)
	
	if (index == 1000) 
	{
		obj.Stop();
	}
}