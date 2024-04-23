const AddCoffee = () => {
    const handelAddCoffee = event => {
      event.preventDefault();
  
      const form = event.target;
  
      const name = form.name.value;
      const quantity = form.quantity.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;
  
      const newCoffee = { name, quantity, supplier, taste, category, details, photo };
  
      console.log(newCoffee);
    };
  
    return (
      <div>
        <section className="p-6 bg-[#F4F3F0] text-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="text-3xl text-blue-800 font-extrabold text-center">
              ADD New Coffee
            </p>
            <p className="text-xl text-center text-black">
              Craft Your Coffee: Build Your Signature Blend
            </p>
          </div>
          <form
            onSubmit={handelAddCoffee}
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-2 lg:w-1/2 sm:w-full  mx-auto mt-8 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Coffee Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Coffee Name"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-1"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Available Quantity</label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="quantity"
                    placeholder="Available Quantity"
                    className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                  />
                </div>
  
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Supplier Name</label>
                  <input
                    id="supplier"
                    name="supplier"
                    type="supplier"
                    placeholder="Supplier Name"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-1"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Taste</label>
                  <input
                    id="taste"
                    name="taste"
                    type="taste"
                    placeholder="Taste"
                    className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                  />
                </div>
  
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Category</label>
                  <input
                    id="category"
                    name="category"
                    type="category"
                    placeholder="Category Name"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-1"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Details</label>
                  <input
                    id="details"
                    name="details"
                    type="details"
                    placeholder="Details"
                    className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                  />
                </div>
  
                <div className="col-span-full">
                  <label className="text-sm">Photo URL</label>
                  <input
                    id="photo"
                    name="photo"
                    type="photo"
                    placeholder="Photo URL"
                    className="p-1 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                  />
                </div>
                <div className="col-span-full">
                  <input
                    type="submit"
                    value="Add Coffee"
                    className="btn btn-block"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    );
  };
  
  export default AddCoffee;
  