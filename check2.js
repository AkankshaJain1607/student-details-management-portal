// using arrow functions, let, for..of loop
let check=()=>
{
	let a=document.getElementsByTagName(`tr`);
	let i=0;
	for(let val of a)
	{
		let row=val.firstChild.innerHTML;
		if(row==document.getElementById(`roll`).value)
		{
			return 1;
		}
	}
	return 0;
}
   
var isNum=my_roll=>(isNaN(my_roll))?1:0 ;

// using arrow functions
let flush=()=>
{
    document.getElementById("name").value="";
    document.getElementById("roll").value="";
    document.getElementById("stream").value="";
    document.getElementById("pass").value="";
}

// using let and const
function insert()
{
	let my_name=document.getElementById("name").value;
	let my_roll=document.getElementById("roll").value;
	let my_stream=document.getElementById("stream").value;
	let my_pass=document.getElementById("pass").value;
	if(my_name.length==0)
	{
		alert(`Please enter Name`);
		return false;
	}
	if((my_roll.length==0)||(isNum(my_roll)))
	{
		alert(`Please enter a numeric Roll no`);
		return false;
    }
	if(my_stream.length==0)
	{
		alert(`Please enter Stream`);
		return false;
	}
	if((my_pass.length==0)||(isNum(my_pass)))
	{
		alert(`Please enter a numeric Passing Year`);
		return false;
    }
	if(my_name==0||my_roll==0||my_stream==0||my_pass==0)
	{
		alert(`Invalid data found!`);
		return false;
    }
    const pattern1=/[0-9]{1,2}/;
    if(!(pattern1.test(my_roll)))
    {
        alert("invalid rollno");
        return false;
    }
    const pattern2=/[0-9]{4}/;
    if(!(pattern2.test(my_pass)))
    {
        alert("invalid pass out year");
        return false;
    }
    let pttrn1=/[a-zA-Z]+[\S]*[\D]*/;
    if(!(pttrn1.test(my_name)))
	{
        alert('ENTER NAME IN CORRECT FORMAT.');
        return false;
	}
    const pattern4=/[a-zA-Z]+[\S]*[\D]*/;
    if(!(pattern4.test(my_stream)))
    {
        alert("invalid stream");
        return false;
    }
    let table=document.getElementById("data_table");
    const len=(table.rows.length);
    let row = table.insertRow(len).outerHTML=
    "<tr id='row"+len+"'> <td><input type='checkbox' id='"+len+"' class='chk'></td> <td id='roll"+len+"'>"+my_roll+"</td> <td id='name"+len+"'>"+my_name+"</td> <td id='str"+len+"'>"+my_stream+"</td> <td id='pass"+len+"'>"+my_pass+"</td> <td> <input type='button' id='edt"+len+"' value='EDIT' class='btn1' onclick='edtrow("+len+")'> <input type='button' id='save"+len+"' value='SAVE' class='btn2' onclick='saverow("+len+")'> <input type='button' id='del"+len+"' value='DELETE' class='btn3' onclick='delrow("+len+")'> </td> </tr>";
    flush();
    return true;
}

// using rest parameters

function edtrow(...row_no)
{
	 document.getElementById("edt"+row_no).style.display="inline";
	 document.getElementById("save"+row_no).style.display="inline";
	 let name=document.getElementById("name"+row_no);
	 let roll=document.getElementById("roll"+row_no);
	 let str=document.getElementById("str"+row_no);
	 let pass=document.getElementById("pass"+row_no);
	 let new_name=name.innerHTML;
	 let new_roll=roll.innerHTML;
	 let new_str=str.innerHTML;
	 let new_pass=pass.innerHTML;
	 name.innerHTML="<input type='text' id='name_1"+row_no+"' value='"+new_name+"'>";
	 roll.innerHTML="<input type='text' id='roll_1"+row_no+"' value='"+new_roll+"'>";
	 str.innerHTML="<input type='text' id='str_1"+row_no+"' value='"+new_str+"'>";
	 pass.innerHTML="<input type='text' id='pass_1"+row_no+"' value='"+new_pass+"'>";
}

//using for...of loop

/*function delete_all()
{
    let a=document.getElementsByTagName(`tr`);
    const len=table.rows.length;
    let j;
    let i=1;
    for(j of a)
    {
        if(j.checked)
        {
            document.getElementById("row"+i+"").outerHTML="";
        }
        i++;
    }
}
*/

//using let and const

/*function delete_all()
{
	let table=document.getElementById("data_table");
	const len=(table.rows.length);
	let i;
	for(i=1;i<=len;i++)
	{
		if(document.getElementById("row"+i+""))
		{
			if(document.getElementById(i).checked)
			{
				document.getElementById("row"+i+"").outerHTML="";
			}
		}
	}
}
*/
/*
function delete_all()
{
    let a=document.getElementsByTagName(`tr`);
    let len=(table.rows.length);
    let i=1;
    while(len--)
    {
        i=1;
        for(let j of a)
        {
            if(j.checked)
            {
               // document.getElementById("row"+i+"").outerHTML="";
                // or
                document.getElementById("data_table").deleteRow(i);
            }
            i++;
        }
    }
}
*/

function delall()
{
   // console.log("hello");
    let a=document.getElementsByClassName(`chk`);
    const len=document.getElementById("data_table").rows.length;
    let lent=len;
    //console.log("len"+len);
    let i=1;
    while(lent--)
    {
        i=1;
        //console.log("hello");
        for(let j of a)
        {
            if(j.checked)
            {
               // document.getElementById("row"+i+"").outerHTML="";
                // or
                document.getElementById("data_table").deleteRow(i);
            }
            i++;
        }
    }
}

function saverow(...row_no)
{
	 let name1=document.getElementById("name_1"+row_no).value;
	 let roll1=document.getElementById("roll_1"+row_no).value;
	 let stream1=document.getElementById("str_1"+row_no).value;
	 let pass1=document.getElementById("pass_1"+row_no).value;
	 document.getElementById("name"+row_no).innerHTML=name1;
	 document.getElementById("roll"+row_no).innerHTML=roll1;
	 document.getElementById("str"+row_no).innerHTML=stream1;
	 document.getElementById("pass"+row_no).innerHTML=pass1;
	 document.getElementById("edt"+row_no).style.display="inline";
	 document.getElementById("save"+row_no).style.display="inline";
}

function delrow(...row_no)
{
    document.getElementById("row"+row_no+"").outerHTML="";
}