<?php 
  include_once('header.php');
?>
    
    

    

    <!-- Page Content -->
    <div class="container" style="font-family: 'Open Sans', sans-serif;">

      <!-- Portfolio Item Heading -->
      <h1 class="my-4">Little Children on a Bicycle</h1>

      <!-- Portfolio Item Row -->
      <div class="row">

        <div class="col-md-8">
          <img class="img-fluid" style="max-width: 100%; height: auto;" src="img/bicycle.jpg" alt="">
        </div>

        <div class="col-md-4">
          <h3 class="my-3">Description</h3>
          <p>While tens of thousands have taken photographs of the mural “Little Children On A Bicycle” in Armenian Street, not many know that the children portrayed were actually siblings Tan Yi and Tan Kern.</p>
          <p>It all started when Tan Yi, six, and her brother, Tan Kern, four, were out with their parents Adrian Tan and Ashley Teoh, who are members of the Urban Sketchers Penang during a sketching walkabout, at the Goddess of Mercy Temple in Jalan Masjid Kapitan Keling in 2012.</p>
          <p>Ernest came on his bicycle and my children were playing with the bike. While they were having fun, he noticed them and started taking their photographs. He captured that particular scene which has now become the famous mural</p>
          
        </div>

      </div>
      <!-- /.row -->

      <!-- Related Projects Row -->
      <br>
      <btn class="donate btn btn-success btn-lg" onclick="donate();" style="cursor: pointer;">Donate To This Artist</btn>
      <br><br>&nbsp;
        
      <!-- <h3 class="my-4">Donate to the artist</h3> -->
      

    </div>
    <!-- /.container -->

    <?php include_once('footer.php'); ?>



    <script type="text/javascript">
      function donate(){
          swal({
            title: "Donation Success!",
            text: "A $5 Donation has been made to the Artist!",
            icon: "success",
            button: "Ok",
          });
        }
      
    </script>

  </body>

</html>

