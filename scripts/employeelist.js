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
					var actions1 = document.createElement("td");
					var actions2 = document.createElement("td");
					var actions3 = document.createElement("td");
					
					firstname.innerHTML = data[i].firstName;
					lastname.innerHTML = data[i].lastName;
					jobtitle.innerHTML = data[i].jobTitle;
					email.innerHTML = data[i].email;
					department.innerHTML = data[i].department;
					location.innerHTML = data[i].location;
					actions1.innerHTML = `<button class='btn btn-warning edit' attr-id='`+data[i].id+`'><i class='fa fa-pencil-alt'></i></button>`;
					actions2.innerHTML = `<button class='btn btn-danger delete'  attr-id='`+data[i].id+`'><i class='fa fa-trash-alt'></i></button>`;
					actions3.innerHTML = `<button class='btn btn-primary view' attr-id='`+data[i].id+`'><i class='fa fa-info'></i></button>`;
		
					
					tr.append(firstname);
					tr.append(lastname);
					tr.append(jobtitle);
					tr.append(email);
					tr.append(department);
					tr.append(location);
					tr.append(actions1);
					tr.append(actions2);
					tr.append(actions3);
					
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
					
								var firstname = document.createElement("tr");
								var lastname = document.createElement("tr");
								var jobtitle = document.createElement("tr");
								var email = document.createElement("tr");
								var department = document.createElement("tr");
								var actions = document.createElement("tr");
								
								firstname.innerHTML = "<th>First Name</th><td><input type='text' class='form-control' name='firstname' placeholder='Enter First Name' /></td>";
								lastname.innerHTML = "<th>Last Name</th><td><input type='text' class='form-control' name='lastname'  placeholder='Enter Last Name' /></td>";
								jobtitle.innerHTML = "<th>Job Title</th><td><input type='text' class='form-control' name='jobtitle' placeholder='Enter Job Title' /></td>";
								email.innerHTML = "<th>Email</th><td><input type='text' class='form-control' name='email' placeholder='Enter Email' /></td>";
								
								var str = "";
								var departments = data;
								for(var i=0;i<departments.length;i++){
									str += `<option value='${departments[i].id}'>${departments[i].name}</option>`
								}
								department.innerHTML = "<th>Select Department</th><td><select name='departmentID' class='form-control'>"+str+"</select></td>";
								
								$("#employeeCreateData").html("");
								$("#employeeCreateData").append(firstname);
								$("#employeeCreateData").append(lastname);
								$("#employeeCreateData").append(jobtitle);
								$("#employeeCreateData").append(email);
								$("#employeeCreateData").append(department);
								
								
								
								
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
							
							var firstname = document.createElement("tr");
							var lastname = document.createElement("tr");
							var jobtitle = document.createElement("tr");
							var email = document.createElement("tr");
							var department = document.createElement("tr");
							var actions = document.createElement("tr");
								
							firstname.innerHTML = "<th>First Name</th><td><input type='text' class='form-control' name='firstname' value='"+res.data.personnel.firstName+"' /></td>";
							lastname.innerHTML = "<th>Last Name</th><td><input type='text' class='form-control' name='lastname' value='"+res.data.personnel.lastName+"' /></td>";
							jobtitle.innerHTML = "<th>Job Title</th><td><input type='text' class='form-control' name='jobtitle' value='"+res.data.personnel.jobTitle+"' /></td>";
							email.innerHTML = "<th>Email</th><td><input type='text' class='form-control' name='email' value='"+res.data.personnel.email+"' /></td>";
							
							var str = "";
							var departments = res.data.department;
							for(var i=0;i<departments.length;i++){
								
								if(departments[i].id == res.data.personnel.departmentID)
									str += `<option value='${departments[i].id}' selected>${departments[i].name}</option>`
								else
								str += `<option value='${departments[i].id}'>${departments[i].name}</option>`
							}
							department.innerHTML = "<th>Select Department</th><td><select name='departmentID' class='form-control'>"+str+"</select></td>";
							
							
							//$("#employeeEditingData").html(tr);
							
							$("#employeeEditingData").html("");
							$("#employeeEditingData").append(firstname);
							$("#employeeEditingData").append(lastname);
							$("#employeeEditingData").append(jobtitle);
							$("#employeeEditingData").append(email);
							$("#employeeEditingData").append(department);
							
							
							$("#editmodal").modal("show");
						}
						
					});
					
				});
				
				$("#editemployeeform").submit(function(evt){
					
					evt.preventDefault();
					$.ajax({
						
						url:"libs/editPersonnelByID.php",
						type:"post",
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
					
							
							var firstname = document.createElement("tr");
							var lastname = document.createElement("tr");
							var jobtitle = document.createElement("tr");
							var email = document.createElement("tr");
							var department = document.createElement("tr");
							var location = document.createElement("tr");
								
							firstname.innerHTML = "<th>First Name</th><td>"+res.data.personnel.firstName+"</td>";
							lastname.innerHTML = "<th>Last Name</th><td>"+res.data.personnel.lastName+"</td>";
							jobtitle.innerHTML = "<th>Job Title</th><td>"+res.data.personnel.jobTitle+"</td>";
							email.innerHTML = "<th>Email</th><td>"+res.data.personnel.email+"</td>";
							department.innerHTML = "<th>Email</th><td>"+res.data.personnel.departmentname+"</td>";
							location.innerHTML = "<th>Location</th><td>"+res.data.personnel.locationname+"</td>";
							
							$("#employeeData").html("");
							$("#employeeData").append(firstname);
							$("#employeeData").append(lastname);
							$("#employeeData").append(jobtitle);
							$("#employeeData").append(email);
							$("#employeeData").append(department);
							$("#employeeData").append(location);
							
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
					"scrollY":        "400px",
					"scrollCollapse": true,
					"paging":         false,
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
