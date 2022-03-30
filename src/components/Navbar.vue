<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="../assets/Kopdig.id.png" width="203"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Parter</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Kemitraan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Layanan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Berita dan acara</a>
        </li>
      </ul>
      <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link" href="#">Masuk</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Daftar</a>
      </li>
    </ul>
    </div>
  </div>
</nav>
</template>