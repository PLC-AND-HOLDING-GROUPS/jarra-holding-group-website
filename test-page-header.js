const db = require('./backend/models');

async function test() {
  const pageHeader = await db.PageHeader.findOne({
    where: { page_identifier: 'about' },
    include: [{ model: db.Attachment, as: 'backgroundAttachment' }]
  });
  console.log(JSON.stringify(pageHeader, null, 2));
}

test().catch(console.error).finally(() => process.exit(0));
