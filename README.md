AWS Serverless Web Stack – Scalable User Data Portal

A high-availability, fully **serverless** web application built on **AWS managed services**. ☁️🔧

Designed to demonstrate **production-style architecture**, **security best practices**, and **event-driven data retrieval**—all without managing a single server. 🧠🔥

---

## 🏗️ Architecture Overview

This application follows a decoupled **3-tier serverless architecture**:
**Client** 💻 → **CDN** 🌐 → **Static Hosting** 📦 → **API Layer** 🛣️ → **Compute** ⚡ → **NoSQL Database** 📊

### 🛠️ Core Services Used

* **Amazon CloudFront** – Global CDN for low-latency edge delivery 🌎🚀
* **Amazon S3** – Secure static website hosting 📂🔒
* **Amazon API Gateway** – REST API management & intelligent routing 🚦🔗
* **AWS Lambda** – Event-driven backend compute (Node.js 20.x) ⚡🤖
* **Amazon DynamoDB** – NoSQL database for high-performance lookups ⚡📦

---

## 🔄 Request Flow

1. 👤 **User Access:** User accesses the web app via **CloudFront**.
2. 📦 **Static Assets:** Frontend assets are served directly from **S3**.
3. 📡 **API Call:** The client sends an asynchronous `GET` request to **API Gateway**.
4. ⚡ **Trigger:** API Gateway invokes **Lambda** using **Proxy Integration**.
5. 🔍 **Data Lookup:** Lambda queries **DynamoDB** using optimized partition key lookups.
6. 📤 **Response:** JSON response is returned with validated **CORS headers**.
7. 🎨 **Render:** Browser renders the dynamic user data instantly.

---

## 🛠️ Technical Stack

### 🎨 Presentation Tier

* **Languages:** HTML5 🏷️, Tailwind CSS 💅, ES6+ JavaScript (Fetch API) 📜
* **Hosting:** S3 Static Hosting 🪣
* **CDN:** CloudFront with HTTPS/TLS 🛡️🌐

### ⚙️ Logic Tier

* **API:** API Gateway (REST API) 🛣️
* **Integration:** Lambda Proxy Integration 🔌
* **Runtime:** Node.js 24.x 🟢
* **Security:** IAM Least Privilege Execution Roles 🔐🛡️

### 📊 Data Tier

* **Database:** DynamoDB 💎
* **Performance:** Partition key optimized for direct `GetItem` operations 🚀
* **Latency:** Sub-millisecond read performance ⏱️⚡

---

## 🔐 Security & Best Practices

* 🛡️ **IAM Roles:** Restricted strictly to `dynamodb:GetItem`.
* 🚦 **CORS:** Preflight handling via `OPTIONS` method.
* 🔒 **Headers:** Explicit `Access-Control-Allow-Origin` validation.
* 🛡️ **OAC:** CloudFront **Origin Access Control** securing the S3 bucket.
* 🚫 **Privacy:** Public S3 bucket access is strictly blocked.

---

## 🚨 Engineering Challenges & Solutions

### 1️⃣ 403 – “Missing Authentication Token” ❌🔑

* **Problem:** Initial API calls returned a 403 Forbidden error.
* **Root Cause:** Incorrect API resource path mapping in the deployed stage.
* **Solution:** Synchronized frontend endpoint with the deployed `/Prod/users` stage path. ✅

### 2️⃣ CORS Policy Blocking Requests 🚫🌐

* **Problem:** Browser blocked requests originating from the CloudFront domain.
* **Solution:** Configured `OPTIONS` method in API Gateway + injected explicit CORS headers in the Lambda response. Verified via **Network Tab** (200 OK). ✅

---

## 📊 Why This Architecture?

| Decision ⚖️ | Reason 💡 |
| --- | --- |
| **DynamoDB over RDS** | No connection pooling issues, auto-scaling, low latency ⚡ |
| **Lambda over EC2** | Zero server management, pay-per-request model 💰 |
| **CloudFront** | Edge caching + SSL termination 🔐 |
| **REST API** | Full control over integration & CORS configuration 🛠️ |

---

## 💰 Estimated Cost (Free Tier Optimized) 💸

* **CloudFront:** $0 (Free Tier eligible) 🆓
* **Lambda:** $0 (1M requests/month free) ⚡
* **API Gateway:** $0 (Free Tier eligible) 🛣️
* **DynamoDB/S3:** Negligible/Free 📉
* **Total:** **~$0.00/month** under standard usage! 🤑

---

## 📈 Production Roadmap

* ✅ Replace `*` CORS with specific domain whitelisting.
* 🔐 Add authentication using **Amazon Cognito**.
* 🌐 Add custom domain via **Route 53** + **ACM**.
* 🏗️ **Infrastructure as Code (IaC):** Terraform or AWS SAM.
* 🔄 **CI/CD:** Automated pipelines with GitHub Actions.
* 👁️ **Observability:** Structured logging with **CloudWatch** + **X-Ray**.

---

## 🧠 What This Project Demonstrates

* ✅ Mastery of **Serverless Architecture** ☁️
* ✅ API Design & Integration patterns 🛣️
* ✅ Advanced **CORS debugging** 🐛
* ✅ IAM **Least Privilege** implementation 🔐
* ✅ High-performance **NoSQL query optimization** 📊

---

## 📬 Author

**Smit Joshi** 👨‍💻

* [LinkedIn](https://www.linkedin.com/in/smitjoshi28/) 💼
