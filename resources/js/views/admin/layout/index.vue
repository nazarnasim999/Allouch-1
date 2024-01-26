<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <!-- <Sidebar /> -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column" style="min-height: 100vh">
      <!-- Main Content -->
      <div id="content">
        <!-- Start of Topbar -->
        <Topbar />
        
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid" style="padding-right: 0px !important; padding-left: 0px !important;
">

<hr>
          <router-view></router-view>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- <div class="ddd"> -->
  <div class="tooltip-container">
    <img src="/images/faq.png" class="faq" />
    <span class="tooltip-text">Frequently Asked Questions
      <button class="buttons">Help</button>
    </span>
  </div>
<!-- </div> -->
      <!-- End of Main Content -->

      <!-- Footer -->
      <!-- <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2021</span>
          </div>
        </div>
      </footer> -->
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->

  <!-- Logout Modal-->
</template>

<script>
import sbadmin2 from "../../../sb-admin-2.js";
import axios from "axios";
import { mapGetters } from "vuex";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

export default {
  name: "AdminLayout",
  components: {
    Topbar,
    Sidebar
  },
  mounted() {
    sbadmin2.init();
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>


<style scoped>

.buttons{
  border-radius: 6px;
border: 1px solid #000;
background: #F96;
box-shadow: 2px 2px 0px 0px #1B1C1D;
display: flex;
width: 102px;
height: 34px;
padding: 5px 24px;
justify-content: center;
align-items: center;
color: #FFF;
}
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-text {
  visibility: hidden;
  width: 300px;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%; /* Position the tooltip above the image */
  right: 5%;
  margin-left: -60px; /* Center the tooltip horizontally */
  opacity: 0;
  transition: opacity 0.3s;

  display: inline-flex;
padding: 15px 39px 16px 36px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 6px;
border-radius: 16px;
border: 2px solid #000;

background: #FFF;

box-shadow: 4px 4px 0px 2px #1B1C1D;
font-weight: bold;

}

.tooltip-container:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

hr {
    margin-top: 0rem;
    margin-bottom: 0rem;
    border: 0;
    border-top: 1px solid #FF9966;
   
    background-color: #FF9966;
}

.faq{
  position: absolute;
    right: 50px;
    bottom: 0px;
    bottom: 125px;
}
.ddd{
  position: relative;
}

@media screen and (max-width: 1600px){
  .faq{
    position: absolute;
    right: -10px;
   
    bottom: 135px;
    width: 9%;
}
}

@media screen and (max-width: 1440px){
  .faq{
    position: absolute;
    right: -10px;
   
    bottom: 46px;
    width: 10%
}
}

@media screen and (max-width: 1024px){
  .faq{
    position: absolute;
    right: 225px;
   
    bottom: 40px;
    width: 12%;
}
}
@media screen and (max-width: 425px){
  .faq{
    position: absolute;
    right: -7px;
   
    bottom: 29px;
    width: 20%;
}
}

</style>
