using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NodeOrders500.Controllers
{
    public class Query1Controller : ApiController
    {
        NodeOrders500Entities myNodeOrdersDB = new NodeOrders500Entities();
        public IHttpActionResult GetOrder(int orderID)
        {
            var Query1 = from anOrder in myNodeOrdersDB.Orders
                         where anOrder.pricePaid >13
                         select anOrder;

            return Json(Query1);

        }
    }
}
