<script lang="ts">
  export let description: string;
  export let imgSrc: string;
  export let linkHref: string;
  export let name: string;
  export let publisher: string;
</script>

<style>
 .card-img {
     height: 100%;
 }
</style>

<div class="isotope-item col-md-4 mb-5 mobileapp frontend">
  <div class="card project-card">
    <div class="row no-gutters">
      <div class="col-xxl-4 card-img-holder">
        <img src={imgSrc} class="card-img" alt="image">
      </div>
      <div class="col-xxl-8">
        <div class="card-body">
          <h5 class="card-title"><a href={linkHref} class="theme-link">{name}</a></h5>
          <p class="card-text">{description}</p>
          <p class="card-text"><small class="text-muted">Publisher: {publisher}</small></p>
        </div>
      </div>
    </div>
  </div>
</div>
