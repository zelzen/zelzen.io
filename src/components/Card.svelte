<div class="card" {style}>
  <slot></slot>
</div>

<style>
  .card {
    height: 380px;
    width: 192px;
    border: 1px solid #C4C4C4;
    background-color: #C4C4C4;
    color: #fff;
    padding: 15px;
    box-sizing: border-box;
  }
</style>

<script>
  export let style = null;
</script>
