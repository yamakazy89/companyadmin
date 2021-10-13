  <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">All Locations</h1>
                        <span class="d-none d-sm-inline-block"> <a href="#" class=""> Home</a> <span> / All Locations </span></span>
                    </div>

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-sm-flex align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">All Locations Data</h6>
                            <button class="d-none d-sm-inline-block btn btn-success" type="button" data-toggle="modal" data-target="#modalCreateLocation"> Create New</button>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive" >
                                <table class="table table-bordered" id="table_data" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Actions</th>
                                        </tr>
                                    </tfoot>
									 <tbody id="locationcontent">
							
									</tbody>
                                 </table>
                            </div>
                        </div>
                    </div>

                </div>
              

<div class="modal fade" id="modalCreateLocation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
	<div class="modal-content">
	  <div class="modal-header">
		<h5 class="modal-title" id="exampleModalLabel">Create New Location</h5>
		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
		  <span aria-hidden="true">&times;</span>
		</button>
	  </div>
		<form id="createdepartmentform">
	  <div class="modal-body">
		  <div class="form-group">
			<label for="recipient-name" class="col-form-label">Name:</label>
			<input type="text" class="form-control" id="location-name-create" name="location-name">
		  </div>
	  </div>
	  <div class="modal-footer">
		<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		<button type="submit" class="btn btn-success">Create</button>
	  </div>
		</form>
	</div>
  </div>
</div>

<div class="modal fade" id="modalEditLocation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
	<div class="modal-content">
	  <div class="modal-header">
		<h5 class="modal-title" id="exampleModalLabel">Create New Location</h5>
		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
		  <span aria-hidden="true">&times;</span>
		</button>
	  </div>
		<form id="editdepartmentform">
	  <div class="modal-body">
		<input type="hidden" id="location-id-edit" name="id">
		  <div class="form-group">
			<label for="recipient-name" class="col-form-label">Name:</label>
			<input type="text" class="form-control" id="location-name-edit" name="location-name">
		  </div>
		  
	  </div>
	  <div class="modal-footer">
		<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		<button type="submit" class="btn btn-success">Update</button>
	  </div>
	</form>
	</div>
  </div>
</div>

<div id="viewmodal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Location Details</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <table class="table table-striped">
			<tbody id="location">
			
			</tbody>
		</table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
 <div id="deletemodal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Location Delete</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
        <form id="deptdeleteform" >
		  <div class="modal-body">
				<input type="hidden" id="locid"  />
				<p>Are you sure you want to remove this item</p>
		  </div>
		  <div class="modal-footer">
			<button type="submit" class="btn btn-danger">Yes</button>
			<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
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