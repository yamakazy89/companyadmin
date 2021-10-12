<div class="container-fluid">

	<!-- Page Heading -->
	<div class="d-sm-flex align-items-center justify-content-between mb-4">
		<h1 class="h3 mb-0 text-gray-800">All Employees</h1>
		<span class="d-none d-sm-inline-block"> <a href="#" class=""> Home</a> <span> / All Employees </span></span>
	</div>
	

	<!-- DataTales Example -->
	<div class="card shadow mb-4">
		<div class="card-header py-3">
			<h6 class="m-0 font-weight-bold text-primary">All Employees Data
				<button class="create btn btn-success float-right" type='button'>Create</button>
			</h6>
		</div>
		<div class="card-body">
			<div class="table-responsive" >
				<table class="table table-bordered" id="table_data" width="100%" cellspacing="0">
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Job Title</th>
							<th>Email</th>
							<th>Department</th>
							<th>Location</th>
							<th >Edit</th>
							<th >Delete</th>
							<th >Details</th>
							
						</tr>
					</thead>
					<tfoot>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Job Title</th>
							<th>Email</th>
							<th>Department</th>
							<th>Location</th>
							<th >Edit</th>
							<th >Delete</th>
							<th >Details</th>
							
						</tr>
					</tfoot>
					<tbody id="employeecontent">
					</tbody>
			   </table>
			</div>
		</div>
	</div>

</div>
<div id="deletemodal" class="modal fade" role="dialog">
  <div class="modal-dialog modal-sm">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Employee Details</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
	<form id="deleteconfirmform">
      <div class="modal-body text-center" >
        
			<input type="hidden" value="" id="employeeid" />
			<p>Are You Sure You Want To Remove This Item</p>
			
		
      </div>
      <div class="modal-footer">
		<input type="submit" value="Yes" class="btn btn-danger fa fa-trash" />
		<input type="submit" value="No" data-dismiss="modal" class="btn btn-default fa fa-close" />

      </div>
	</form>
    </div>

  </div>
</div>
<div id="messagemodal" class="modal fade" role="dialog">
  <div class="modal-dialog modal-sm">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Message Details</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
	<form id="messageboxform">
		<div class="modal-body text-center" >
			<p id="messagebox"></p>
		</div>
      <div class="modal-footer">
		<input type="submit" value="Ok" class="btn btn-Success " />
      </div>
	</form>
    </div>

  </div>
</div>
<div id="viewmodal" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Employee Details</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <table class="table table-striped">
			<thead >
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Job Title</th>
					<th>Email</th>
					<th>Department Name</th>
					<th>Location</th>
				</tr>
			</thead>
			<tbody id="employeeData">
			
			</tbody>
			
		</table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
<div id="editmodal" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Employee Update</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
	  <form id="editemployeeform">
			<input type="hidden" value="" id="editemployeeid" name="id" />
		  <div class="modal-body">
			<table class="table table-striped">
				
				<tbody id="employeeEditingData">
				
				</tbody>
				
			</table>
		  </div>
		  <div class="modal-footer">
			<button type="submit" class="btn btn-success">Update</button>
			<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		  </div>
	  </form>
    </div>

  </div>
</div>
<div id="createmodal" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Employee Create</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
	  <form id="createemployeeform">
			
		  <div class="modal-body">
			<table class="table table-striped">
				
				<tbody id="employeeCreateData">
				
				</tbody>
				
			</table>
		  </div>
		  <div class="modal-footer">
			<button type="submit" class="btn btn-success">Create</button>
			<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		  </div>
	  </form>
    </div>

  </div>
</div>