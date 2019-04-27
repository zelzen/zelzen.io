<main>
  <img src="assets/zelzen.svg" alt="Zelzen" />
  <Line width="40%" />
  <div class="cards">
    <Card>
      Dev Work
    </Card>
    <Card>
      Design Work
    </Card>
  </div>
  <div class="cards">
    <Card>
      Other Stuff
    </Card>
    <ContactCard />
  </div>
  <Line />
  <div class="contact">
    <span>Zelzen Design Co</span>
    <span>hey@zelzen.io</span>
    <span>801.385.20195</span>
  </div>
</main>

<script>
  import Card from './components/Card';
  import ContactCard from './components/ContactCard';
  import Line from './components/Line';
</script>

<style>
  main {
    width: 95vw;
    max-width: 410px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cards  {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }

  .cards:last-of-type {
    margin-bottom: 0;
  }

  .cards > :global(div) {
    margin-right: 10px;
  }
  
  .cards > :global(div):last-of-type {
    margin-right: 0;
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

  .contact > span {
    margin-bottom: 10px;
  }
</style>
