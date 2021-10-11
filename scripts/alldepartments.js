var locations =null;
$(document).ready(function(){
	
	$.ajax({
		url:"libs/getAllDepartments.php",
		type:"get",
		dataType:"json",
		success:function(res){
			
			var str="";
			locations = res.locations; 
			for(var locindex=0; locindex<locations.length; locindex++){
				str += `<option value='${locations[locindex].id}'>${locations[locindex].name}</option>`
			}
			
			$(".location").html(str);
			
			if(res.status.code == "200"){
				
				var datacount = res.data.length;
				var data = res.data;
				
				for(var i=0;i<datacount;i++){
					
					var tr = document.createElement("tr");
					
					
					var id = document.createElement("td");
					var name = document.createElement("td");
					var locationname = document.createElement("td");
					var actions = document.createElement("td");
					
					id.innerHTML = data[i].id;
					name.innerHTML = data[i].name;
					locationname.innerHTML = data[i].locationname;
					
					actions.innerHTML = `
					<button class='btn btn-warning edit' attr-id='`+data[i].id+`'><i class='fa fa-pencil-alt'></i></button>
					<button class='btn btn-danger delete'  attr-id='`+data[i].id+`'><i class='fa fa-trash-alt'></i></button>
					<button class='btn btn-primary view' attr-id='`+data[i].id+`'><i class='fa fa-info'></i></button>`;
					
				//	tr.append(id);
					tr.append(name);
					tr.append(locationname);
					tr.append(actions);
					
					$("#departmentcontent").append(tr);
					//break;
					
				}
				
				
				$(".view").on("click",function(){
					
					$.ajax({
						
						url:"libs/getDepartmentByID.php",
						type:"get",
						dataType:"json",
						data:{id:$(this).attr('attr-id')},
						success:function(res){
							
							$("#department").html("");
							var tr = document.createElement("tr");
					
							var id = document.createElement("td");
							var name = document.createElement("td");
							
							id.innerHTML = res.data[0].id;
							name.innerHTML = res.data[0].name;
					
							tr.append(id);
							tr.append(name);
							
							$("#department").append(tr);
							
							$("#viewmodal").modal("show");
						}
						
					});
					
				});
				
				$(".delete").on("click",function(){
					
					var id = $(this).attr('attr-id');
					$("#deptid").val(id);
					$("#deletemodal").modal("show");
					
					$("#deptdeleteform").submit(function(evt){
						$("#deletemodal").modal("hide");	
						evt.preventDefault();
						
						$.ajax({
						
							url:"libs/deleteDepartmentByID.php",
							type:"get",
							dataType:"json",
							data:{id:id},
							success:function(res){
								
									if(res.status.code == "200"){
										$("#messagemodal").modal("show");
										var inter = setInterval(function(){
											
											location.reload();
											clearInterval(inter);
										},700);
										
									}
								
							}
							
						});
						
					});
					
					
				});
				
				
				 $("#table_data").DataTable({
					  "paging": false,
					  "searching": true,
					  "ordering": true,
					  "info": true,
					  "autoWidth": false,
					  "responsive": true,
					}); 
				
				
				$(".edit").on("click",function(){
					
					$("#depart-id-edit").val($(this).attr('attr-id'));
					$.ajax({
						
						url:"libs/getDepartmentByID.php",
						type:"get",
						dataType:"json",
						data:{id:$(this).attr('attr-id')},
						success:function(res){
							
							$("#depart-name-edit").val(res.data[0].name);
							$("#location-edit").val(res.data[0].locationID);
							
							$("#modalEditDepartment").modal("show");
						}
						
					});
					
				});
				$("#editdepartmentform").on("submit",function(evt){
					
					evt.preventDefault();
					
					$.ajax({
						
						url:"libs/editDepartment.php",
						type:"post",
						dataType:"json",
						data:$(this).serialize(),
						success:function(res){
							
							$("#messagebox").html(res.data.message);
							$("#modalEditDepartment").modal("hide");

							$("#messagemodal").modal("show");
							$("#messageboxform").submit(function(evt){

								location.reload();

							});
						}
						
					});
					
				});
				$("#createdepartmentform").on("submit",function(evt){
					
					evt.preventDefault();
					
					$.ajax({
						
						url:"libs/createDepartment.php",
						type:"post",
						dataType:"json",
						data:$(this).serialize(),
						success:function(res){
							
							$("#messagebox").html(res.data.message);
							$("#modalCreateDepartment").modal("hide");

							$("#messagemodal").modal("show");
							$("#messageboxform").submit(function(evt){

								location.reload();

							});
						}
						
					});
					
				});
				
				
			}
			
			
		}
		
		
	});
	
	$(".create").on("click",function(){
		
		$("#createmodal").modal("show");
		
	});
	
	
});
