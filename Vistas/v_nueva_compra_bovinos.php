 <?php 
    date_default_timezone_set('America/El_Salvador');
    @session_start(); 
?>  
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Compra | Nueva</title>
        <!-- Google Font: Source Sans Pro -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
         <!-- DataTables -->
        <link rel="stylesheet" href="../plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
        <link rel="stylesheet" href="../plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
        <link rel="stylesheet" href="../plugins/datatables-buttons/css/buttons.bootstrap4.min.css">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css">
        <!-- daterange picker -->
        <link rel="stylesheet" href="../plugins/daterangepicker/daterangepicker.css">
       
        <link rel="stylesheet" href="../plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.css">
        
        <link rel="stylesheet" href="../plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css">
            
        <!--<link rel="stylesheet" href="../plugins/daterangepicker/daterangepicker.css">  -->

        <link rel="stylesheet" href="../plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css">
        <!-- iCheck for checkboxes and radio inputs -->
        <link rel="stylesheet" href="../plugins/icheck-bootstrap/icheck-bootstrap.min.css">
        <!-- Bootstrap Color Picker -->
        <link rel="stylesheet" href="../plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css">
        <!-- Tempusdominus Bootstrap 4 -->
        <link rel="stylesheet" href="../plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
        <!-- Select2 -->
        <link rel="stylesheet" href="../plugins/select2/css/select2.min.css">
        <link rel="stylesheet" href="../plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css">
        <!-- Bootstrap4 Duallistbox -->
        <link rel="stylesheet" href="../plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css">
        <!-- BS Stepper -->
        <link rel="stylesheet" href="../plugins/bs-stepper/css/bs-stepper.min.css">

        <link rel="stylesheet" href="../plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css">
        <!-- dropzonejs -->
        <link rel="stylesheet" href="../plugins/dropzone/min/dropzone.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="../dist/css/adminlte.min.css">
    </head>
    <body class="hold-transition sidebar-mini">
        <div class="wrapper">
            <!-- Navbar -->
            <?php
                require_once ('../Menus/menusidebar.php');
            ?>
            <?php
                require_once ('../Menus/loader.php');
            ?>
            <!-- CONTENIDO DE LA PAGINA -->
            <div class="content-wrapper">               
                <section class="content-header">
                    <div class="container-fluid">                        
                    </div>
                </section>
                <!-- FROMULARIO COMPRA -->
                <form method="POST" name="formulario_registro_compra_b" id="formulario_registro_compra_b">
                    <section class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12 col-sm-12">
                                    <div class="card">
                                        <div class="card-header bg-success">
                                            <h3 class="card-title">Compras Bovinos</h3>
                                        </div>
                                       <input type="hidden" id="almacenar_compra_b" name="almacenar_compra_b" value="nueva_compra_b">                                        
                                        <input type="hidden" id="empleado_compra_b" name="empleado_compra_b" <?php print 'value ="'.$_SESSION['idempleado'].'"'?>>
                                        <div class="row">
                                            <div class="col-md-10 offset-md-1">
                                                <div class="row">
                                                    <div class="col-4">
                                                        <div class="form-group">
                                                            <label>Proveedor</label>
                                                            <div class="input-group mb-3">
                                                                <select class="form-control" id="proveedor_compra_b" name="proveedor_compra_b" >
                                                                 </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                           
                                                    <div class="col-4">
                                                        <div class="form-group">
                                                            <label>Tipo Documento</label>
                                                            <select class="form-control" id="tipo_doc_compra_b" name="tipo_doc_compra_b" required>
                                                                <option selected="selected">Certificado de Carta de Venta</option>
                                                                 <option>Factura</option>
                                                                <option>Ticket</option>
                                                                <option>Crédito Fiscal</option>
                                                            </select>
                                                        </div>                                                      
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="form-group">
                                                            <label>No. Documento</label>
                                                            <input type="text" class="form-control validcion_solo_numeros_fact" id="num_doc_compra_b" name="num_doc_compra_b" placeholder="123456" maxlength="6" required autocomplete="off">
                                                        </div>
                                                    </div>
                                                            
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label for="">Descripción</label>
                                                            <input type="text" class="form-control" id="descrip_compra_b" name="descrip_compra_b" placeholder="Nueva Compra"  required autocomplete="off">
                                                        </div>
                                                    </div>
                                                    <div class="col-3">
                                                        <div class="form-group">
                                                            <label>Fecha Compra</label>
                                                            <div class="form-group mb-3">
                                                                <input size="16" type="text" placeholder="12-12-2021 12:00" readonly class="form_datetime_b form-control" id="fecha_compra_b" name="fecha_compra_b" required>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-3">
                                                        <div class="form-group">
                                                            <label>Fecha Sistema</label>
                                                            <div class="input-group mb-3">
                                                                <input type="text"  name="fecha_sistema_compra_b" id="fecha_sistema_compra_b" class="form-control" value="<?php echo date('d-m-Y G:i:s');?>" readonly="true">
                                                            </div>
                                                        </div>
                                                    </div>
                                                        
                                                    <div class="form-group text-center">
                                                        <a class="btn bg-success" data-toggle="modal" data-target="#md_agregar_bovino">
                                                            <i class="fas fa-shopping-cart"></i>
                                                                Agregar
                                                                Bovino
                                                        </a> 
                                                        <a  class="btn bg-success btn_limpiar">
                                                            <i class="fa fa-trash"></i>
                                                                Limpiar
                                                        </a >
                                                    </div>
                                                </div>
                                            </div>                                    
                                        </div>                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- DETALLTE DE LA VENTA (TABLA) -->
                    <section class="content">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="card">
                                            <div class="col-12 table-responsive">
                                                <div class="col-12 table-responsive">
                                                    <table id="tablaDetalleBovinos" class="table table-striped projects" width="100%">
                                                       <thead>
                                                        <th >Bovino</th>
                                                        <th class="text-center col-2" >Foto</th>
                                                        <th class="text-center col-2" >Raza</th>
                                                        <th class="text-center col-2" >Costo $</th>
                                                        <th class="text-center col-2" >Acción</th>
                                                       </thead>
                                                        <tbody>

                                                       </tbody>
                                                     </table>        
                                                </div>
                                                    <div class="col-2 float-sm-right">
                                                        <label>Total</label>                            
                                                         <input id="total_compra_vista" name="total_compra_vista" type="text" class="form-control" placeholder="$00.00" readonly="true">
                                                         <input type="hidden" name="total_compra_guardar" id="total_compra_guardar">
                                                    </div>
                                                    <div class="col-2 float-sm-right">
                                                        <label>Iva</label>
                                                        <input id="Iva_compra_vista" name="Iva_compra_vista" type="text" class="form-control" placeholder="$00.00" contenteditable="false" readonly="true">
                                                        <input type="hidden" name="iva_guardar" id="iva_guardar">
                                                    </div>
                                                    <div class="col-2 float-sm-right">
                                                        <label>SubTotal</label>
                                                        <input id="Subtotal_compra_vista" name="Subtotal_compra_vista"  type="text" class="form-control" placeholder="$00.00" contenteditable="false" readonly="true">
                                                        <input type="hidden" name="subtotal_guardar" id="subtotal_guardar">
                                                    </div>
                                                <br>
                                                <br>
                                                <br>
                                                <br>

                                                <div class="form-group float-sm-right">
                                                    <button class="btn bg-success" type="submit">
                                                        <i class="fas fa-check"></i>
                                                        Comprar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </section>
                </form>
                 <!--MODAL DE BUSQUEDA PARA BOVINO-->
                <div class="modal fade" id="md_agregar_bovino"> 
                    <form  method="POST" name="formulario_buscaProducto" id="formulario_buscaProducto">               
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header bg-success">
                                    <h4 class="modal-title">Añadir Producto</h4>
                                    <button  
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="card">
                                        <!-- TABLA QUE MUESTRA LOS BOVINOS -->
                                        <div class="card-body p-0" id="tb_seleccion_bovino">                                        
                                        </div>
                                        <!-- /.card-body -->
                                    </div>
                                </div>
                                <div class="modal-footer float-right">
                                    <a class="btn bg-success btn_listo" data-dismiss="modal" >
                                        <i class="fa fa-check"></i>Listo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>   
                </div>               
            </div>

               

           
            <footer class="main-footer">
                <div class="float-right d-none d-sm-block">                    
                </div>
                <strong>UES &copy; 2021</strong>
                Todos los Derechos Reservados
            </footer>
           
            <aside class="control-sidebar control-sidebar-dark">
            </aside>           
        </div>
       
        <!-- jQuery -->
        <script src="../plugins/jquery/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <!-- Bootstrap 4 -->
        <script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <!-- Select2 -->
        <script src="../plugins/select2/js/select2.full.min.js"></script>
        <!-- Bootstrap4 Duallistbox -->
        <script src="../plugins/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js"></script>
        <!-- InputMask -->
        <script src="../plugins/moment/moment.min.js"></script>
        <script src="../plugins/inputmask/jquery.inputmask.min.js"></script>
        <!-- date-range-picker -->
        <script src="../plugins/daterangepicker/daterangepicker.js"></script>
        <!-- bootstrap color picker -->
        <script src="../plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js"></script>
        <!-- Tempusdominus Bootstrap 4 -->
        <script src="../plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
        <!-- Bootstrap Switch -->
        <script src="../plugins/bootstrap-switch/js/bootstrap-switch.min.js"></script>
        <!-- BS-Stepper -->
        <script src="../plugins/bs-stepper/js/bs-stepper.min.js"></script>
        <!-- dropzonejs -->
        <script src="../plugins/dropzone/min/dropzone.min.js"></script>
        <!-- AdminLTE App -->
        <script src="../dist/js/adminlte.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>
        <!-- jquery-validation -->
        <script src="../plugins/jquery-validation/jquery.validate.min.js"></script>
        <script src="../plugins/jquery-validation/additional-methods.min.js"></script>

        <script src="../plugins/jquery-validation/jquery.validate.min.js"></script>
        <script src="../plugins/jquery-validation/additional-methods.min.js"></script>
        <script src="../plugins/datatables/jquery.dataTables.min.js"></script>
        <script src="../plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
        <script src="../plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
        <script src="../plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
        <script src="../plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
        <script src="../plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
        <script src="../plugins/datatables-buttons/js/buttons.html5.min.js"></script>
        <script src="../plugins/datatables-buttons/js/buttons.print.min.js"></script>
        <script src="../plugins/datatables-buttons/js/buttons.colVis.min.js"></script>     

        <script src="../plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.js"></script>
        <script src="../plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js"></script>

        <script src="../plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
        <script src="../plugins/daterangepicker/daterangepicker.js"></script>
        <script src="../plugins/sweetalert2/sweetalert2.min.js"></script>      

        <script src="../dist/js/demo.js"></script> 

        <script src="../Scripts/compra_bovinos.js"></script>

    </body>
</html>
