<?php 
  include_once('header.php');
?>
    
    
    <!-- Page Content -->
    <div class="container-fluid">
    <br>
    <h3 style="font-family: 'Open Sans', sans-serif;">Browse Stories</h2>
    <hr>
        <div class="row" style="font-family: 'Open Sans', sans-serif;">
            <div class="col-lg-8 col-md-8 col-xs-12">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#all" role="tab">All</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#originals" role="tab">Originals</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#community" role="tab">Community</a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <!-- All Content -->
                    <div class="tab-pane active" id="all" role="tabpanel">
                        <div class="list-group">

                            <!-- First Item -->
                          <div class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class="row">
                                <div class="col-lg-2">
                                    <img class="card-img-top" src="img/index/thumbnail_1.png" alt="">
                                </div>
                                <div class="col-lg-10">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1">Little Children on a Bicycle</h5>
                                      <small>3 days ago</small>
                                    </div>
                                    <p class="mb-1">Experience lorem ipsum</p>
                                    <small class="text-right">
                                        <a href="/penanghackatathon2017/bike/" class="btn btn-primary" style="color: white; cursor: pointer;">View Story &nbsp;<i class="fa fa-hand-o-right"></i></a>
                                        <a href="/penanghackatathon2017/art_info.php" class="btn btn-warning art_info" style="cursor: pointer;">Art Info &nbsp;<i class="fa fa-info-circle"></i></a>
                                    </small>
                                </div>
                            </div>
                          </div>

                          <!-- Second Item -->
                          <div class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class="row">
                                <div class="col-lg-2">
                                    <img class="card-img-top" src="img/index/thumbnail_2.png" alt="">
                                </div>
                                <div class="col-lg-10">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1">The fury of Bruce Lee</h5>
                                      <small>6 days ago</small>
                                    </div>
                                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small class="text-right">
                                        <a href="penanghackatathon2017/bike/" class="btn btn-primary" style="color: white; cursor: pointer;">View Story &nbsp;<i class="fa fa-hand-o-right"></i></a>
                                        <a href="/penanghackatathon2017/art_info.php" class="btn btn-warning art_info" style="cursor: pointer;">Art Info &nbsp;<i class="fa fa-info-circle"></i></a>
                                    </small>
                                </div>
                            </div>
                          </div>

                          <!-- Third Item -->
                          <div class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class="row">
                                <div class="col-lg-2">
                                    <img class="card-img-top" src="img/index/thumbnail_3.png" alt="">
                                </div>
                                <div class="col-lg-10">
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1">List group item heading</h5>
                                      <small>2 weeks ago</small>
                                    </div>
                                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small class="text-right">
                                        <a href="penanghackatathon2017/bike/" class="btn btn-primary" style="color: white; cursor: pointer;">View Story &nbsp;<i class="fa fa-hand-o-right"></i></a>
                                        <a href="/penanghackatathon2017/art_info.php" class="btn btn-warning art_info" style="cursor: pointer;">Art Info &nbsp;<i class="fa fa-info-circle"></i></a>
                                    </small>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>


                    <!-- Originals Content -->
                    <div class="tab-pane" id="originals" role="tabpanel">...</div>
                    <!-- Communit Content -->
                    <div class="tab-pane" id="community" role="tabpanel">...</div>
                </div>
            </div>

            <!-- Maps here if got time -->
            <div class="col-lg-4 col-md-4 col-xs-12">
                <h4>Stories Near You!</h4>
                <div id="map"  style="position:relative; margin: 0;padding: 0;height: 538px; max-width: none;"></div>
            </div>

        </div> <!-- End Row -->

   

      

      <br>

    </div>

    <!-- /.container -->

    <?php include_once('footer.php'); ?>
    <!-- Current location 5.405154, 100.321736 -->
    <!-- Google Maps Javascript -->
    <script type="text/javascript" src="js/browse_map.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRID3wiM3KVnJebRDv87SKVJADmUu9xD4&callback=initMap"></script>

</html>












