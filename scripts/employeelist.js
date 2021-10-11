$(document).ready(function(){
		
	
	$.ajax({
		url:"libs/getAll.php",
		type:"get",
		dataType:"json",
		success:function(res){
			
			if(res.status.code == "200"){
				
				var datacount = res.data.length;
				var data = res.data;
				
				for(var i=0;i<datacount;i++){
					
					var tr = document.createElement("tr");
					
					
					var firstname = document.createElement("td");
					var lastname = document.createElement("td");
					var jobtitle = document.createElement("td");
					var email = document.createElement("td");
					var department = document.createElement("td");
					var location = document.createElement("td");
					var actions = document.createElement("td");
					
					firstname.innerHTML = data[i].firstName;
					lastname.innerHTML = data[i].lastName;
					jobtitle.innerHTML = data[i].jobTitle;
					email.innerHTML = data[i].email;
					department.innerHTML = data[i].department;
					location.innerHTML = data[i].location;
					actions.innerHTML = `
					<button class='btn btn-warning edit' attr-id='`+data[i].id+`'><i class='fa fa-pencil-alt'></i></button>
					<button class='btn btn-danger delete'  attr-id='`+data[i].id+`'><i class='fa fa-trash-alt'></i></button>
					<button class='btn btn-primary view' attr-id='`+data[i].id+`'><i class='fa fa-info'></i></button>`;
		
					
					tr.append(firstname);
					tr.append(lastname);
					tr.append(jobtitle);
					tr.append(email);
					tr.append(department);
					tr.append(location);
					tr.append(actions);
					
					$("#employeecontent").append(tr);
					//break;
					
				
				}
				
				$(".create").on("click",function(){
					
					$.ajax({
						url:"libs/getAllDepartments.php",
						type:"get",
						dataType:"json",
						success:function(res){
							
							if(res.status.code == "200"){
								
								var datacount = res.data.length;
								var data = res.data;
							
								var tr = document.createElement("tr");
					
								var firstname = document.createElement("td");
								var lastname = document.createElement("td");
								var jobtitle = document.createElement("td");
								var email = document.createElement("td");
								var department = document.createElement("td");
								var actions = document.createElement("td");
								
								firstname.innerHTML = "<input type='text' class='form-control' name='firstname' placeholder='Enter First Name' />";
								lastname.innerHTML = "<input type='text' class='form-control' name='lastname'  placeholder='Enter Last Name' />";
								jobtitle.innerHTML = "<input type='text' class='form-control' name='jobtitle' placeholder='Enter Job Title' />";
								email.innerHTML = "<input type='text' class='form-control' name='email' placeholder='Enter Email' />";
								
								var str = "";
								var departments = data;
								for(var i=0;i<departments.length;i++){
									str += `<option value='${departments[i].id}'>${departments[i].name}</option>`
								}
								department.innerHTML = "<select name='departmentID' class='form-control'>"+str+"</select>";
								
								tr.append(firstname);
								tr.append(lastname);
								tr.append(jobtitle);
								tr.append(email);
								tr.append(department);
								
								$("#employeeCreateData").html(tr);
								
								
								$("#createmodal").modal("show");
								
								
								
							}
						}
					});
					
					
				
					
				});
				
				$("#createemployeeform").on("submit",function(evt){
					
					evt.preventDefault();
					$.ajax({
						
						url:"libs/createPersonnel.php",
						type:"get",
						dataType:"json",
						data:$(this).serialize(),
						success:function(res){
							$("#messagebox").html(res.data.message);
							$("#createmodal").modal("hide");

							$("#messagemodal").modal("show");
							$("#messageboxform").submit(function(evt){
								
								location.reload();
								
							});
						}
					});
					
				});
				
				$(".edit").on("click",function(){
					
					$("#editemployeeid").val($(this).attr('attr-id'));
					$.ajax({
						
						url:"libs/getPersonnelByID.php?id="+$(this).attr('attr-id'),
						type:"get",
						dataType:"json",
						success:function(res){
							console.log(res);
							$("#department").html("");
							var tr = document.createElement("tr");
					
							var firstname = document.createElement("td");
							var lastname = document.createElement("td");
							var jobtitle = document.createElement("td");
							var email = document.createElement("td");
							var department = document.createElement("td");
							var location = document.createElement("td");
							var actions = document.createElement("td");
							
							firstname.innerHTML = "<input type='text' class='form-control' name='firstname' value='"+res.data.personnel.firstName+"' />";
							lastname.innerHTML = "<input type='text' class='form-control' name='lastname' value='"+res.data.personnel.lastname+"' />";
							jobtitle.innerHTML = "<input type='text' class='form-control' name='jobtitle' value='"+res.data.personnel.jobtitle+"' />";
							email.innerHTML = "<input type='text' class='form-control' name='email' value='"+res.data.personnel.email+"' />";
							
							var str = "";
							var departments = res.data.department;
							for(var i=0;i<departments.length;i++){
								
								if(departments[i].id == res.data.personnel.departmentID)
									str += `<option value='${departments[i].id}' selected>${departments[i].name}</option>`
								else
								str += `<option value='${departments[i].id}'>${departments[i].name}</option>`
							}
							department.innerHTML = "<select name='departmentID' class='form-control'>"+str+"</select>";
							/* 
							firstname.innerHTML = "<input type='text' class='form-control' name='firstname' value='"res.data.personnel.firstName+"' />";
							lastname.innerHTML = res.data.personnel.lastName;
							jobtitle.innerHTML = res.data.personnel.jobTitle;
							email.innerHTML = res.data.personnel.email;
							//department.innerHTML = res.data.department;
							department.innerHTML = res.data.personnel.departmentname;
							location.innerHTML = res.data.personnel.locationname; */
						
							tr.append(firstname);
							tr.append(lastname);
							tr.append(jobtitle);
							tr.append(email);
							tr.append(department);
							
							$("#employeeEditingData").html(tr);
							//$("#employeeData").append(tr);
							
							$("#editmodal").modal("show");
						}
						
					});
					
				});
				
				$("#editemployeeform").submit(function(evt){
					
					evt.preventDefault();
					$.ajax({
						
						url:"libs/editPersonnelByID.php",
						type:"get",
						dataType:"json",
						data:$(this).serialize(),
						success:function(res){
							$("#messagebox").html(res.data.message);
							$("#editmodal").modal("hide");

							$("#messagemodal").modal("show");
							$("#messageboxform").submit(function(evt){
								
								location.reload();
								
							});
						}
					});
					
				});
				
				
				$(".view").on("click",function(){
						
					$.ajax({
						
						url:"libs/getPersonnelByID.php?id="+$(this).attr('attr-id'),
						type:"get",
						dataType:"json",
						success:function(res){
							console.log(res);
							$("#department").html("");
							var tr = document.createElement("tr");
					
							var firstname = document.createElement("td");
							var lastname = document.createElement("td");
							var jobtitle = document.createElement("td");
							var email = document.createElement("td");
							var department = document.createElement("td");
							var location = document.createElement("td");
							var actions = document.createElement("td");
							
							firstname.innerHTML = res.data.personnel.firstName;
							lastname.innerHTML = res.data.personnel.lastName;
							jobtitle.innerHTML = res.data.personnel.jobTitle;
							email.innerHTML = res.data.personnel.email;
							//department.innerHTML = res.data.department;
							department.innerHTML = res.data.personnel.departmentname;
							location.innerHTML = res.data.personnel.locationname;
						
							tr.append(firstname);
							tr.append(lastname);
							tr.append(jobtitle);
							tr.append(email);
							tr.append(department);
							tr.append(location);
							
							$("#employeeData").html(tr);
							//$("#employeeData").append(tr);
							
							$("#viewmodal").modal("show");
						}
						
					});
					
				});
				$(".delete").on("click",function(){
						
					
					$("#employeeid").val($(this).attr('attr-id'));
					$("#deletemodal").modal("show");
					
				});
				
				$("#deleteconfirmform").submit(function(evt){
					
					evt.preventDefault();
					var id = $("#employeeid").val()
					$.ajax({
						
						url:"libs/deletePersonnelByID.php?id="+id,
						type:"get",
						dataType:"json",
						success:function(res){
							console.log(res);
							
							$("#messagebox").html(res.data.message);
							$("#deletemodal").modal("hide");

							$("#messagemodal").modal("show");
							$("#messageboxform").submit(function(evt){
								
								location.reload();
								
							});
						}
						
					});
					
				});
				
				
				$("#table_data").DataTable({
					"paging": false,
					"searching": true,
					//"bPaginate": false,
					"ordering": true,
					"info": true,
					"autoWidth": false,
					"responsive": true,
				}); 
				
				
			}
			
			
		}
		
		
	});
	
	
	
	
});
