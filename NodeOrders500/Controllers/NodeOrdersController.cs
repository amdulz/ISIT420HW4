using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NodeOrders500.Controllers
{
    
    public class NodeOrdersController : ApiController
    {
        NodeOrders500Entities myNodeOrdersDB = new NodeOrders500Entities();
        public IEnumerable<Order> GetAllorders()
        {
            return myNodeOrdersDB.Orders;
        }
    }
}
