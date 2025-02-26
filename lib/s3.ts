import AWS from "aws-sdk"
import { v4 as uuidv4 } from "uuid"

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

export const uploadToS3 = async (file) => {
  const fileExtension = file.name.split(".").pop()
  const fileName = `${uuidv4()}.${fileExtension}`

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName,
    Body: file.buffer,
    ContentType: file.mimetype,
  }

  const result = await s3.upload(params).promise()
  return result.Location
}

export const deleteFromS3 = async (fileUrl) => {
  const key = fileUrl.split("/").pop()

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: key,
  }

  await s3.deleteObject(params).promise()
}

