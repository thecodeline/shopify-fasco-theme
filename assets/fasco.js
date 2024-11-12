var cartContents = fetch(window.Shopify.routes.root + 'cart.js')
  .then(response => response.json())
  .then(data => { return data });

  function add_to_cart(item_id,quantity){
   // console.log(item_id +"/ Quantity = "+ quantity);
    let formData = {
        'items': [{
         'id': item_id,
         'quantity': quantity
         }]
       };
       
       fetch(window.Shopify.routes.root + 'cart/add.js', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(formData)
       })
       .then(response => {
        $('.offcanvas-body').load(document.URL +  ' .offcanvas-body');
        $("#lblCartCount").load(document.URL+ ' #lblCartCount'); 
        return response.json();

       })
       .catch((error) => {
         console.error('Error:', error);
       });

    
 


  }
  function remove_from_cart(item_id){

  }
  function update_quantity(item_id,quantity){
    
    let updates = {
        
            'id': item_id,
            'quantity': quantity
          
      };
      
      fetch(window.Shopify.routes.root + 'cart/update.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ updates })
      })
      .then(response => {
        $('.offcanvas-body').load(document.URL +  ' .offcanvas-body');
        $("#lblCartCount").load(document.URL+ ' #lblCartCount'); 
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
      });




  }